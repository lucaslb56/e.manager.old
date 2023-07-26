import { Create, Entity, List } from "App/Dtos/Entity";
import { Query } from "App/Dtos/Query";
import Model from "App/Models/Entity";
import { EntityRepository } from "../entity-repository";

export class LucidEntityRepository implements EntityRepository {
  public async create(data: Create): Promise<Entity> {
    return (await Model.create(data)).toJSON() as Entity;
  }

  public async build(data: Create[]): Promise<Entity[]> {
    const entities = await Model.createMany(data);
    return entities.map((entity) => entity.toJSON() as Entity);
  }

  public async findBy<T extends keyof Entity>(
    key: T,
    value: Entity[T]
  ): Promise<Entity | null> {
    return ((await Model.findBy(key, value))?.toJSON() as Entity) ?? null;
  }

  public async list(query: Query): Promise<List> {
    return (
      await Model.query()
        .preload("columns")
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
