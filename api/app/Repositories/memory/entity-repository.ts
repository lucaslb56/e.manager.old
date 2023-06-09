import { Create, Entity, List } from "App/Dtos/Entity";
import { Query } from "App/Dtos/Query";
import { randomUUID } from "crypto";
import { EntityRepository } from "../entity-repository";

export class MemoryEntityRepository implements EntityRepository {
  public items: Entity[] = [];

  public async create(data: Create): Promise<Entity> {
    const entity: Entity = {
      ...data,
      id: randomUUID(),
      active: true,
      created_at: new Date(),
      updated_at: new Date(),
    };

    this.items.push(entity);

    return entity;
  }

  public async build(data: Create[]): Promise<Entity[]> {
    const entities: Entity[] = data.map((entity) => ({
      ...entity,
      id: randomUUID(),
      active: true,
      created_at: new Date(),
      updated_at: new Date(),
    }));

    this.items.push(...entities);

    return entities;
  }

  public async findBy<T extends keyof Entity>(
    key: T,
    value: Entity[T]
  ): Promise<Entity | null> {
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
