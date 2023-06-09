import { Query } from "App/Dtos/Query";
import { Create, List, Template } from "App/Dtos/Template";
import { randomUUID } from "crypto";
import { TemplateRepository } from "../template-respository";

export class MemoryTemplateRepository implements TemplateRepository {
  public items: Template[] = [];

  public async create(data: Create): Promise<Template> {
    const template: Template = {
      ...data,
      id: randomUUID(),
      active: true,
      created_at: new Date(),
      updated_at: new Date(),
    };

    this.items.push(template);

    return template;
  }

  public async findBy<T extends keyof Template>(
    key: T,
    value: Template[T]
  ): Promise<Template | null> {
    return this.items.find((item) => item[key] === value) ?? null;
  }

  public async list(query: Query): Promise<List> {
    let data = this.items
      .filter((item) =>
        !(query.search === undefined)
          ? item.name.includes(query.search as string) ||
            item.prefix.includes(query.search as string)
          : item
      )
      .slice(
        (Number(query.page) - 1) * Number(query.limit),
        Number(query.page) * Number(query.limit)
      );

    return {
      meta: {
        current_page: Number(query.page),
        first_page: 1,
        first_page_url: null,
        last_page: Math.ceil(this.items.length / Number(query.limit)),
        last_page_url: null,
        next_page_url: null,
        per_page: Number(query.limit),
        previous_page_url: null,
        total: this.items.length,
      },
      data: data,
    };
  }
}
