import { Template } from "App/Dtos/Template";
import { TemplateRepository } from "App/Repositories/template-respository";

export class ShowUseCase {
  constructor(private templateRepository: TemplateRepository) {}

  async execute(id: string): Promise<Template> {
    const template = await this.templateRepository.findBy("id", id);

    if (!template) throw new Error();

    return template;
  }
}
