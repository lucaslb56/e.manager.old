import { List } from "App/Dtos/Collumn";
import { Query } from "App/Dtos/Query";
import { CollumnRepository } from "App/Repositories/collumn-repository";

export class ListUseCase {
  constructor(private collumnRepository: CollumnRepository) {}

  async execute(query: Query): Promise<List> {
    return await this.collumnRepository.list(query);
  }
}
