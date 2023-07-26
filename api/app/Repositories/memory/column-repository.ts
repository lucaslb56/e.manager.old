import { Column, Create, List } from "App/Dtos/Column";
import { Query } from "App/Dtos/Query";
import { randomUUID } from "crypto";
import { ColumnRepository } from "../column-repository";

export class MemoryColumnRepository implements ColumnRepository {
  public items: Column[] = [];

  public async create(data: Create): Promise<Column> {
    const column: Column = {
      ...data,
      id: randomUUID(),
      active: true,
      created_at: new Date(),
      updated_at: new Date(),
    };

    this.items.push(column);

    return column;
  }

  public async build(data: Create[]): Promise<Column[]> {
    const entities: Column[] = data.map((entity) => ({
      ...entity,
      id: randomUUID(),
      active: true,
      created_at: new Date(),
      updated_at: new Date(),
    }));

    this.items.push(...entities);

    return entities;
  }

  public async findBy<T extends keyof Column>(
    key: T,
    value: Column[T]
  ): Promise<Column | null> {
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
