import { Query } from "App/Dtos/Query";
import { List } from "App/Dtos/Template";
import { TemplateRepository } from "App/Repositories/template-repository";

export class ListUseCase {
  constructor(private templateRepository: TemplateRepository) {}

  async execute(query: Query): Promise<List> {
    return await this.templateRepository.list(query);
  }
}
