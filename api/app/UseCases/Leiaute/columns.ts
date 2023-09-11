import { LeiauteColumn, LeiauteQuery } from "App/Dtos/Leiaute";
import { LeiauteRepository } from "App/Repositories/leiaute-repository";

export class ColumnstUseCase {
  constructor(private leiauteRepository: LeiauteRepository) {}

  async execute(query: LeiauteQuery): Promise<LeiauteColumn[]> {
    const leiaute = await this.leiauteRepository.findBy("prefix", query.prefix);

    if (!leiaute || leiaute.version !== query.version) return [];

    const columns = await this.leiauteRepository.columns(query);

    if (!columns.length) return [];

    return columns;
  }
}
