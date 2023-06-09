import Database from "@ioc:Adonis/Lucid/Database";
import { CollectExtract, Create, Extract } from "App/Dtos/Extract";
import { ExtractRepository } from "App/Repositories/extract-repository";

export class BuildUseCase {
  constructor(private extractRepository: ExtractRepository) {}

  async execute(data: CollectExtract[]): Promise<Extract[]> {
    let create: Create[] = [];

    for (const { template, entities } of data) {
      for (const { prefix: entity, values } of entities) {
        for (const { prefix: collumn, value } of values) {
          create.push({
            template,
            entity,
            collumn,
            value,
          });
        }
      }
    }

    for (const item of create) {
      const insertValuesQuery = `
        INSERT INTO ${item.template}_${item.entity} (id, ${item.collumn}) VALUES (gen_random_uuid(), ${item.value})
      `;

      await Database.rawQuery(insertValuesQuery);
    }

    return await this.extractRepository.build(create);
  }
}
