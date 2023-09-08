import Database from "@ioc:Adonis/Lucid/Database";
import { CollectExtract, Create, Extract } from "App/Dtos/Extract";
import { ExtractRepository } from "App/Repositories/extract-repository";
import { LeiauteRepository } from "App/Repositories/leiaute-repository";
import { formattedExtractData } from "App/Utils/formatted-extract-data";

export class BuildUseCase {
  constructor(
    private extractRepository: ExtractRepository,
    private leiauteRepository: LeiauteRepository
  ) {}

  async execute(data: CollectExtract[]): Promise<Extract[]> {
    const exists_xml_keys_ids = await this.extractRepository.findExistXMLId(
      data
    );

    const filtered_data = data.filter(
      (item) => !exists_xml_keys_ids.includes(item._id)
    );

    for (const { entities, leiaute: leiaute_prefix, _id } of filtered_data) {
      const leiaute = await this.leiauteRepository.findBy(
        "prefix",
        leiaute_prefix
      );

      const items = formattedExtractData(entities, _id, leiaute?.id as string);

      await Database.table(
        `entity_${leiaute?.prefix.replace("-", "_")}` as string
      ).multiInsert(items);
    }

    const created_data = filtered_data.map(({ _id, entities, leiaute }) => ({
      leiaute,
      xml_id: _id,
      accumulation: entities.length,
    })) as Create[];

    return await this.extractRepository.build(created_data);
  }
}
