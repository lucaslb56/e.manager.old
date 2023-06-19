import { Create, Extract, List } from "App/Dtos/Extract";
import { Query } from "App/Dtos/Query";
import Model from "App/Models/Extract";
import { ExtractRepository } from "../extract-repository";

export class LucidExtractRepository implements ExtractRepository {
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
    console.log({ query });

    return (
      await Model.query()
        .if(query.search, (build) =>
          build
            .where("value", "ilike", `%${query.search}%`)
            .orWhere("template", "ilike", `%${query.search}%`)
            .orWhere("entity", "ilike", `%${query.search}%`)
            .orWhere("collumn", "ilike", `%${query.search}%`)
        )
        .orderBy("template", query.order)
        .paginate(Number(query.page), Number(query.limit))
    ).toJSON() as List;
  }
}
