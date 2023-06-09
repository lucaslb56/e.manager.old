import { Collumn, Create, List } from "App/Dtos/Collumn";
import { Query } from "App/Dtos/Query";
import Model from "App/Models/Collumn";
import { CollumnRepository } from "../collumn-repository";

export class LucidColllumnRepository implements CollumnRepository {
  public async create(data: Create): Promise<Collumn> {
    return (await Model.create(data)).toJSON() as Collumn;
  }

  public async build(data: Create[]): Promise<Collumn[]> {
    const entities = await Model.createMany(data);
    return entities.map((entity) => entity.toJSON() as Collumn);
  }

  public async findBy<T extends keyof Collumn>(
    key: T,
    value: Collumn[T]
  ): Promise<Collumn | null> {
    return ((await Model.findBy(key, value))?.toJSON() as Collumn) ?? null;
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
