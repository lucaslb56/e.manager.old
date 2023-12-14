import { Build } from "App/Dtos/Leiaute";
import { LeiauteRepository } from "App/Repositories/leiaute-repository";
import { LeiautePrefix } from "App/Utils/constants";

export class BuildUseCase {
  constructor(private leiauteRepository: LeiauteRepository) {}

  async execute({
    data,
    query,
  }: Build): Promise<{ [key: string]: number | string }[]> {
    // const leiaute = await this.leiauteRepository.findBy("prefix", query.prefix);
    const leiaute = await this.leiauteRepository.findBy({
      prefix: query.prefix,
    });

    if (!leiaute || leiaute.version.prefix !== query.version)
      throw new Error("Leiaute not found");

    const exist_e_social_id_list =
      await this.leiauteRepository.getExistsESocialId({
        prefix: leiaute.prefix as keyof typeof LeiautePrefix,
        version: leiaute.version.prefix,
      });

    const filtered_data = data?.filter(
      (item) => !exist_e_social_id_list.includes(item.e_social_id as string)
    );

    if (!filtered_data?.length) return [];

    await this.leiauteRepository.build({ data: filtered_data, query });

    return filtered_data;
  }
}
