import { Query } from "App/Dtos/Query";
import { Create, List, Template } from "App/Dtos/Template";

export interface TemplateRepository {
  create: (date: Create) => Promise<Template>;
  findBy: <T extends keyof Template>(
    key: T,
    value: Template[T]
  ) => Promise<Template | null>;
  list: (query: Query) => Promise<List>;
}
