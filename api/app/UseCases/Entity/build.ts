import { Create, Entity } from "App/Dtos/Entity";
import { EntityRepository } from "App/Repositories/entity-repository";

export class BuildUseCase {
  constructor(private entityRepository: EntityRepository) {}

  async execute(data: Create[]): Promise<Entity[]> {
    return await this.entityRepository.build(data);
  }
}
