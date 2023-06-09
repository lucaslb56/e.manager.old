import { Collumn, Create } from "App/Dtos/Collumn";
import { CollumnRepository } from "App/Repositories/collumn-repository";

export class BuildUseCase {
  constructor(private collumnRepository: CollumnRepository) {}

  async execute(data: Create[]): Promise<Collumn[]> {
    for (const item of data) {
      const entity = await this.collumnRepository.findBy("name", item.name);
      if (entity) throw new Error();
    }

    return await this.collumnRepository.build(data);
  }
}
