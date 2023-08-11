import Database from "@ioc:Adonis/Lucid/Database";
import {
  CollectExtract,
  Create,
  ExportToCSVRequest,
  Extract,
  List,
} from "App/Dtos/Extract";
import { Query } from "App/Dtos/Query";
import Model from "App/Models/Extract";
import { DateTime } from "luxon";
import { ExtractRepository } from "../extract-repository";

export class LucidExtractRepository implements ExtractRepository {
  public async findExistXMLId(data: CollectExtract[]): Promise<string[]> {
    const result = await Promise.all(
      data.map(async ({ template, _id }) => {
        return (await Database.query()
          .select("_id")
          .from(`entity_${template.toLowerCase()}`)
          .where("_id", _id)
          .first()) as { _id: string };
      })
    );

    return [...new Set(result)]?.flatMap((item) => item?._id || []);
  }
  public async build(data: Create[]): Promise<Extract[]> {
    const entities = await Model.createMany(data);
    return entities.map((entity) => entity.toJSON() as Extract);
  }

  public async findBy<T extends keyof Extract>(
    key: T,
    value: Extract[T]
  ): Promise<Extract | null> {
    return ((await Model.findBy(key, value))?.toJSON() as Extract) ?? null;
  }

  public async list(query: Query): Promise<List> {
    return (
      await Model.query()
        .if(query.search, (build) =>
          build
            .where("value", "ilike", `%${query.search}%`)
            .orWhere("template", "ilike", `%${query.search}%`)
            .orWhere("entity", "ilike", `%${query.search}%`)
            .orWhere("column", "ilike", `%${query.search}%`)
        )
        .orderBy("template", query.order)
        .paginate(Number(query.page), Number(query.limit))
    ).toJSON() as List;
  }

  public async generateExportData(query: ExportToCSVRequest): Promise<any[]> {
    const exist_query_date = query?.date?.initial && query?.date?.final;

    return await Database.query()
      .from(`entity_${query?.prefix}`)
      .select("*")
      .if(exist_query_date, (builder) =>
        builder.whereBetween("created_at", [
          DateTime.fromJSDate(
            new Date(query?.date?.initial as string)
          ).toSQL() as string,
          DateTime.fromJSDate(
            new Date(query?.date?.final as string)
          ).toSQL() as string,
        ])
      )
      .if(query._id, (builder) => builder.where("_id", query._id as string));
  }
}
