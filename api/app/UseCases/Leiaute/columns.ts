import { LeiauteColumn, LeiauteQuery } from "App/Dtos/Leiaute";
import { LeiauteRepository } from "App/Repositories/leiaute-repository";

export class ColumnstUseCase {
  constructor(private leiauteRepository: LeiauteRepository) {}

  async execute(query: LeiauteQuery): Promise<LeiauteColumn[]> {
    const leuiaute = await this.leiauteRepository.findBy(
      "prefix",
      query.prefix
    );

    if (!leuiaute || leuiaute.version !== query.version)
      throw new Error("leuiaute not found");

    const columns = await this.leiauteRepository.columns(query);

    if (!columns.length) throw new Error("Data not found");

    return columns;
  }
}
