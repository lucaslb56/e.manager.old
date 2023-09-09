import { Build, ListLeiauteData } from "App/Dtos/Leiaute";
import { LeiauteRepository } from "App/Repositories/leiaute-repository";
import { LeiautePrefix } from "App/Utils/constants";

export class BuildUseCase {
  constructor(private leiauteRepository: LeiauteRepository) {}

  async execute({ data, query }: Build): Promise<void> {
    const template = await this.leiauteRepository.findBy(
      "prefix",
      query.prefix
    );

    if (!template || template.version !== query.version)
      throw new Error("Template not found");

    const exist_e_social_id_list =
      await this.leiauteRepository.getExistsESocialId({
        prefix: template.prefix as keyof typeof LeiautePrefix,
        version: template.version,
      });

    console.log({ exist_e_social_id_list });

    const filtered_data = data.filter(
      (item) => !exist_e_social_id_list.includes(item.e_social_id as string)
    );

    console.log({ filtered_data });

    if (!filtered_data.length) return;

    await this.leiauteRepository.build({
      query,
      data: filtered_data.map((item) => ({
        ...item,
        leiaute_id: template.id,
      })) as ListLeiauteData[],
    });
  }
}
