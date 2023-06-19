import Database from "@ioc:Adonis/Lucid/Database";
import { CollectExtract, Create, Extract } from "App/Dtos/Extract";
import { ExtractRepository } from "App/Repositories/extract-repository";

export class BuildUseCase {
  constructor(private extractRepository: ExtractRepository) {}

  async execute(data: CollectExtract[]): Promise<Extract[]> {
    let create: Create[] = [];

    for (const { template, entities } of data) {
      for (const { prefix: entity, values } of entities) {
        const insertValuesQuery = `INSERT INTO "${template}_${entity}" (id, ${values
          .flatMap((item) => `"${item.prefix}"`)
          .join(",")}) VALUES (gen_random_uuid(), ${values
          .flatMap((item) => {
            if (typeof item.value === "string") {
              return `'${item.value}'`;
            }
            return item.value;
          })
          .join(",")})`;

        await Database.rawQuery(insertValuesQuery);

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

    return await this.extractRepository.build(create);
  }
}
