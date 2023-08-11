import { Query } from "App/Dtos/Query";
import { Create, List, Template } from "App/Dtos/Template";
import Model from "App/Models/Template";
import { TemplateRepository } from "../template-repository";

export class LucidTemplateRepository implements TemplateRepository {
  public async create(data: Create): Promise<Template> {
    return (await Model.create(data)).toJSON() as Template;
  }

  public async findBy<T extends keyof Template>(
    key: T,
    value: Template[T]
  ): Promise<Template | null> {
    const template = await Model.findBy(key, value);

    return (template?.toJSON() as Template) ?? null;
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
