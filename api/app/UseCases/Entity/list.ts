import { List } from "App/Dtos/Entity";
import { Query } from "App/Dtos/Query";
import { EntityRepository } from "App/Repositories/entity-repository";

export class ListUseCase {
  constructor(private entityRepository: EntityRepository) {}

  async execute(query: Query): Promise<List> {
    return await this.entityRepository.list(query);
  }
}
