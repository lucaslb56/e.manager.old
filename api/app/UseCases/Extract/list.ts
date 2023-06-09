import { List } from "App/Dtos/Extract";
import { Query } from "App/Dtos/Query";
import { ExtractRepository } from "App/Repositories/extract-repository";

export class ListUseCase {
  constructor(private extractRepository: ExtractRepository) {}

  async execute(query: Query): Promise<List> {
    return await this.extractRepository.list(query);
  }
}
