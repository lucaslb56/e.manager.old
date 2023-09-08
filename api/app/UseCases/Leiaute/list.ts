import { List } from "App/Dtos/Leiaute";
import { Query } from "App/Dtos/Query";
import { LeiauteRepository } from "App/Repositories/leiaute-repository";

export class ListUseCase {
  constructor(private leiauteRepository: LeiauteRepository) {}

  async execute(query: Query): Promise<List> {
    return await this.leiauteRepository.list(query);
  }
}
