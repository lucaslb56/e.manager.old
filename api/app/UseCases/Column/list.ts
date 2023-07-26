import { List } from "App/Dtos/Column";
import { Query } from "App/Dtos/Query";
import { ColumnRepository } from "App/Repositories/column-repository";

export class ListUseCase {
  constructor(private columnRepository: ColumnRepository) {}

  async execute(query: Query): Promise<List> {
    return await this.columnRepository.list(query);
  }
}
