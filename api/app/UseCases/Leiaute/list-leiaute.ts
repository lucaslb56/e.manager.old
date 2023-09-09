import { LeiauteQuery, ListLeiaute } from "App/Dtos/Leiaute";
import { LeiauteRepository } from "App/Repositories/leiaute-repository";

export class ListLeiauteUseCase {
  constructor(private leiauteRepository: LeiauteRepository) {}

  async execute(query: LeiauteQuery): Promise<ListLeiaute> {
    return await this.leiauteRepository.listLeiaute(query);
  }
}
