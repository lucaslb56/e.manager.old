import { Collumn, Create, List } from "App/Dtos/Collumn";
import { Query } from "App/Dtos/Query";

export interface CollumnRepository {
  build: (data: Create[]) => Promise<Collumn[]>;
  create: (date: Create) => Promise<Collumn>;
  findBy: <T extends keyof Collumn>(
    key: T,
    value: Collumn[T]
  ) => Promise<Collumn | null>;
  list: (query: Query) => Promise<List>;
}
