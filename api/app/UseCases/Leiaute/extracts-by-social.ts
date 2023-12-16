import { LeiauteQuery, ListLeiauteData } from "App/Dtos/Leiaute";
import { LeiauteRepository } from "App/Repositories/leiaute-repository";

export class ExtractBySocialUseCase {
  constructor(private leiauteRepository: LeiauteRepository) {}

  async execute({
    prefix,
    version,
    e_social_id,
  }: LeiauteQuery): Promise<ListLeiauteData[]> {
    const leiaute = await this.leiauteRepository.findBy({
      prefix,
    });

    if (!leiaute || leiaute.version.prefix !== version) return [];

    const extracts = await this.leiauteRepository.findManyByESocialId({
      prefix,
      version,
      e_social_id,
    });

    if (!extracts.length) return [];

    return extracts;
  }
}
