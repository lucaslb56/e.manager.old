import { LeiauteQuery, ListLeiaute } from "App/Dtos/Leiaute";
import { LeiauteRepository } from "App/Repositories/leiaute-repository";

export class ListLeiauteUseCase {
  constructor(private leiauteRepository: LeiauteRepository) {}

  async execute(query: LeiauteQuery): Promise<ListLeiaute> {
    const leiaute = await this.leiauteRepository.findBy("prefix", query.prefix);

    if (!leiaute || leiaute.version !== query.version)
      throw new Error("Leiaute not found");

    return await this.leiauteRepository.listLeiaute(query);
  }
}
