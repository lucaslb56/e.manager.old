import { Column, Create, List } from "App/Dtos/Column";
import { Query } from "App/Dtos/Query";

export interface ColumnRepository {
  build: (data: Create[]) => Promise<Column[]>;
  create: (date: Create) => Promise<Column>;
  findBy: <T extends keyof Column>(
    key: T,
    value: Column[T]
  ) => Promise<Column | null>;
  list: (query: Query) => Promise<List>;
}
