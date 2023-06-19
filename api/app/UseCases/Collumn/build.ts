import { Collumn, Create } from "App/Dtos/Collumn";
import { CollumnRepository } from "App/Repositories/collumn-repository";

export class BuildUseCase {
  constructor(private collumnRepository: CollumnRepository) {}

  async execute(data: Create[]): Promise<Collumn[]> {
    return await this.collumnRepository.build(data);
  }
}
