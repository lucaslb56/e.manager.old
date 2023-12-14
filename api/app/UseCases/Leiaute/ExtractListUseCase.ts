import { Extract, ExtractList, LeiauteQuery } from "App/Dtos/Leiaute";
import { LeiauteRepository } from "App/Repositories/leiaute-repository";

export class ExtractListUseCase {
  constructor(private leiauteRepository: LeiauteRepository) {}

  async execute(query: LeiauteQuery): Promise<ExtractList> {
    const leiaute = await this.leiauteRepository.findBy({
      prefix: query.prefix,
    });

    const columns = await this.leiauteRepository.columns(query);

    if (!leiaute || leiaute.version.prefix !== query.version || !columns.length)
      return { data: [] as Extract[] } as ExtractList;

    return await this.leiauteRepository.extracts(query);
  }
}
