import Database from "@ioc:Adonis/Lucid/Database";
import { CollectExtract, Create, Extract } from "App/Dtos/Extract";
import { ExtractRepository } from "App/Repositories/extract-repository";
import { TemplateRepository } from "App/Repositories/template-repository";
import { formattedExtractData } from "App/Utils/formatted-extract-data";

export class BuildUseCase {
  constructor(
    private extractRepository: ExtractRepository,
    private templateRepository: TemplateRepository
  ) {}

  async execute(data: CollectExtract[]): Promise<Extract[]> {
    const exists_xml_keys_ids = await this.extractRepository.findExistXMLId(
      data
    );

    const filtered_data = data.filter(
      (item) => !exists_xml_keys_ids.includes(item._id)
    );

    for (const { entities, template: template_prefix, _id } of filtered_data) {
      const template = await this.templateRepository.findBy(
        "prefix",
        template_prefix
      );

      const items = formattedExtractData(entities, _id, template?.id as string);
      await Database.table(`entity_${template?.prefix}` as string).multiInsert(
        items
      );
    }

    const created_data = filtered_data.map(({ _id, entities, template }) => ({
      template,
      xml_id: _id,
      accumulation: entities.length,
    })) as Create[];

    return await this.extractRepository.build(created_data);
  }
}
