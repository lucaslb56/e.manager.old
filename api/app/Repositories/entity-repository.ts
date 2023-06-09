import { Create, Entity, List } from "App/Dtos/Entity";
import { Query } from "App/Dtos/Query";

export interface EntityRepository {
  build: (data: Create[]) => Promise<Entity[]>;
  create: (date: Create) => Promise<Entity>;
  findBy: <T extends keyof Entity>(
    key: T,
    value: Entity[T]
  ) => Promise<Entity | null>;
  list: (query: Query) => Promise<List>;
}
