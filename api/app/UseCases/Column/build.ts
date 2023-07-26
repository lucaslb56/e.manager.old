import { Column, Create } from "App/Dtos/Column";
import { ColumnRepository } from "App/Repositories/column-repository";

export class BuildUseCase {
  constructor(private columnRepository: ColumnRepository) {}

  async execute(data: Create[]): Promise<Column[]> {
    return await this.columnRepository.build(data);
  }
}
