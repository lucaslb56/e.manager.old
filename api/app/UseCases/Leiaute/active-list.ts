import { Leiaute } from "App/Dtos/Leiaute";
import { Query } from "App/Dtos/Query";
import { LeiauteRepository } from "App/Repositories/leiaute-repository";

export class ActiveListUseCase {
  constructor(private leiauteRepository: LeiauteRepository) {}

  async execute(query: Query): Promise<Leiaute[]> {
    return await this.leiauteRepository.activeList(query);
  }
}
