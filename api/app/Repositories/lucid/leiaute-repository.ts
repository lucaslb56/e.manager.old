import Database from "@ioc:Adonis/Lucid/Database";
import {
  FilteredBetweenDate,
  Leiaute,
  LeiauteQuery,
  List,
  ListLeiaute,
  ListLeiauteData,
} from "App/Dtos/Leiaute";
import { Query } from "App/Dtos/Query";
import Model from "App/Models/Leiaute";
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
        .orderBy("name", query.order)
        .paginate(Number(query.page), Number(query.limit))
    ).toJSON() as List;
  }

  public async listLeiaute(query: LeiauteQuery): Promise<ListLeiaute> {
    console.log({ query });

    return (
      await Database.query()
        .from(`${query.prefix}_${query.version}`)
        .if(query?.e_social_id, (builder) =>
          builder.where("e_social_id", "ilike", `%${query.e_social_id}%`)
        )
        .paginate(Number(query.page), Number(query.limit))
    ).toJSON() as ListLeiaute;
  }

  public async export(query: LeiauteQuery): Promise<ListLeiauteData[]> {
    const existQueryDate = query?.date?.initial && query?.date?.final;

    console.log({ a: query.columns });
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

  public async columns(query: LeiauteQuery): Promise<string[]> {
    const columnsInfo = await Database.connection().columnsInfo(
      `${query.prefix}_${query.version}`
    );

    return Object.entries(columnsInfo).flatMap(([key]) => key);
  }
}
