import { Column, Create, List } from "App/Dtos/Column";
import { Query } from "App/Dtos/Query";
import Model from "App/Models/Column";
import { ColumnRepository } from "../column-repository";

export class LucidColumnRepository implements ColumnRepository {
  public async create(data: Create): Promise<Column> {
    return (await Model.create(data)).toJSON() as Column;
  }

  public async build(data: Create[]): Promise<Column[]> {
    const entities = await Model.createMany(data);
    return entities.map((entity) => entity.toJSON() as Column);
  }

  public async findBy<T extends keyof Column>(
    key: T,
    value: Column[T]
  ): Promise<Column | null> {
    return ((await Model.findBy(key, value))?.toJSON() as Column) ?? null;
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
}
