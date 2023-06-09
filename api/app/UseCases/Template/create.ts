import { Create, Template } from "App/Dtos/Template";
import { TemplateRepository } from "App/Repositories/template-respository";

export class CreateUseCase {
  constructor(private templateRepository: TemplateRepository) {}

  async execute(data: Create): Promise<Template> {
    const template = await this.templateRepository.findBy("name", data.name);

    if (template) throw new Error();

    return await this.templateRepository.create(data);
  }
}
