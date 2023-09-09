import { LeiauteQuery } from "App/Dtos/Leiaute";
import { LeiauteRepository } from "App/Repositories/leiaute-repository";

export class ColumnstUseCase {
  constructor(private leiauteRepository: LeiauteRepository) {}

  async execute(query: LeiauteQuery): Promise<string[]> {
    const template = await this.leiauteRepository.findBy(
      "prefix",
      query.prefix
    );

    if (!template || template.version !== query.version)
      throw new Error("Template not found");

    const data = await this.leiauteRepository.columns(query);

    if (!data.length) throw new Error("Data not found");

    return data;
  }
}
