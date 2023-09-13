import Database from "@ioc:Adonis/Lucid/Database";
import {
  Build,
  ExtractList,
  FilteredBetweenDate,
  Leiaute,
  LeiauteColumn,
  LeiauteExtract,
  LeiauteQuery,
  List,
  ListLeiauteData,
} from "App/Dtos/Leiaute";
import { Query } from "App/Dtos/Query";
import Model from "App/Models/Leiaute";
import { TypeColumn } from "App/Utils/constants";
import { extractXML, getESocialEvent, getESocialId } from "App/Utils/extract";
import { Leiautes } from "App/Utils/leiautes";
import { readFile } from "fs/promises";
import { DateTime } from "luxon";
import { LeiauteRepository } from "../leiaute-repository";

export class LucidLeiauteRepository implements LeiauteRepository {
  public async findBy<T extends keyof Leiaute>(
    key: T,
    value: Leiaute[T]
  ): Promise<Leiaute | null> {
    const Leiaute = await Model.findBy(key, value);

    return (Leiaute?.toJSON() as Leiaute) ?? null;
  }

  public async list(query: Query): Promise<List> {
    return (
      await Model.query()
        .if(query.search, (build) =>
          build
            .where("name", "ilike", `%${query.search}%`)
            .orWhere("prefix", "ilike", `%${query.search}%`)
        )
        .orderBy("prefix", query.order)
        .paginate(Number(query.page), Number(query.limit))
    ).toJSON() as List;
  }

  public async activeList(query: Query): Promise<Leiaute[]> {
    return (
      await Model.query().where("active", true).orderBy("name", query.order)
    ).map((item) => item.toJSON() as Leiaute);
  }

  public async toggleActive(leiaute: Leiaute): Promise<void> {
    await Model.query()
      .where("id", leiaute.id)
      .update({ active: !leiaute.active });
  }

  public async extracts(query: LeiauteQuery): Promise<ExtractList> {
    return (
      await Database.query()
        .from(`${query.prefix}_${query.version}`)
        .select([
          "e_social_id",
          "event_type",
          "leiaute_id",
          "leiautes.prefix as prefix",
          "leiautes.version as version",
        ])
        .if(query?.search, (builder) =>
          builder
            .where("e_social_id", "ilike", `%${query.search}%`)
            .orWhere("event_type", "ilike", `%${query.search}%`)
        )
        .distinct(["e_social_id"])
        .select(
          Database.raw(
            `COUNT(e_social_id) OVER(PARTITION BY e_social_id)::int as count`
          )
        )
        .innerJoin("leiautes", "leiaute_id", "leiautes.id")
        .paginate(Number(query.page), Number(query.limit))
    ).toJSON() as ExtractList;
  }

  public async findManyByESocialId(
    query: LeiauteQuery
  ): Promise<ListLeiauteData[]> {
    return await Database.query()
      .from(`${query.prefix}_${query.version}`)
      .where("e_social_id", query.e_social_id as string);
  }

  public async export(query: LeiauteQuery): Promise<ListLeiauteData[]> {
    const existQueryDate = query?.date?.initial && query?.date?.final;

    return (await Database.query()
      .from(`${query.prefix}_${query.version}`)
      .if((query?.columns as string)?.length > 0, (builder) =>
        builder.select((query.columns as string).split(","))
      )
      .if(
        existQueryDate,
        async (builder) =>
          await this.filteredLeiauteBetweenDate({ query, builder })
      )
      .if(query?.e_social_id, (builder) =>
        builder.where("e_social_id", query.e_social_id as string)
      )) as ListLeiauteData[];
  }

  private async filteredLeiauteBetweenDate({
    builder,
    query,
  }: FilteredBetweenDate) {
    const initial_date = DateTime.fromJSDate(
      new Date(query?.date?.initial as string)
    );
    const final_date = DateTime.fromJSDate(
      new Date(query?.date?.final as string)
    );

    const initial_date_sql = initial_date.toSQL() as string;
    const final_date_sql = final_date.toSQL() as string;

    return builder.whereBetween("created_at", [
      initial_date_sql,
      final_date_sql,
    ]);
  }

  public async columns(query: LeiauteQuery): Promise<LeiauteColumn[]> {
    const columnsInfo = await Database.connection().columnsInfo(
      `${query.prefix}_${query.version}`
    );

    return Object.entries(columnsInfo).map(([key, { type }]) => ({
      key,
      type: TypeColumn[type],
    }));
  }

  public async build({ data, query }: Build): Promise<void> {
    await Database.table(`${query.prefix}_${query.version}`).multiInsert(data);
  }

  public async getExistsESocialId({
    prefix,
    version,
  }: LeiauteQuery): Promise<string[]> {
    const data = (
      await Database.query().from(`${prefix}_${version}`).select("e_social_id")
    )?.flatMap((item) => item.e_social_id);

    return [...new Set(data)];
  }

  public async extract({
    leiautes,
    prefix,
    version,
  }: LeiauteExtract): Promise<ListLeiauteData[]> {
    const e_social_exist_ids = await this.getExistsESocialId({
      prefix,
      version,
    });

    const extract_data = leiautes.map(async (field) => {
      const file = await readFile(field.tmpPath as string, "utf-8");

      const e_social_event = getESocialEvent(file);

      const e_social_id = getESocialId(file, e_social_event);

      const data = extractXML(Leiautes[`${prefix}_${version}`], file);

      return { event_type: e_social_event, e_social_id, ...data };
    });

    const data = (await Promise.all(extract_data)) as ListLeiauteData[];

    return data.filter(
      (item) => !e_social_exist_ids.includes(item.e_social_id as string)
    );
  }
}
