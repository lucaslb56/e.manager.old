import { Create, Entity } from "App/Dtos/Entity";
import { EntityRepository } from "App/Repositories/entity-repository";

export class BuildUseCase {
  constructor(private entityRepository: EntityRepository) {}

  async execute(data: Create[]): Promise<Entity[]> {
    for (const item of data) {
      const entity = await this.entityRepository.findBy("prefix", item.prefix);
      if (entity) throw new Error();
    }

    return await this.entityRepository.build(data);
  }
}
