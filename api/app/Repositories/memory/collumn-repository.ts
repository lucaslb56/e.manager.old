import { Collumn, Create, List } from "App/Dtos/Collumn";
import { Query } from "App/Dtos/Query";
import { randomUUID } from "crypto";
import { CollumnRepository } from "../collumn-repository";

export class MemoryCollumnRepository implements CollumnRepository {
  public items: Collumn[] = [];

  public async create(data: Create): Promise<Collumn> {
    const collumn: Collumn = {
      ...data,
      id: randomUUID(),
      active: true,
      created_at: new Date(),
      updated_at: new Date(),
    };

    this.items.push(collumn);

    return collumn;
  }

  public async build(data: Create[]): Promise<Collumn[]> {
    const entities: Collumn[] = data.map((entity) => ({
      ...entity,
      id: randomUUID(),
      active: true,
      created_at: new Date(),
      updated_at: new Date(),
    }));

    this.items.push(...entities);

    return entities;
  }

  public async findBy<T extends keyof Collumn>(
    key: T,
    value: Collumn[T]
  ): Promise<Collumn | null> {
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
