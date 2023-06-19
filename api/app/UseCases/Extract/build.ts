import Database from "@ioc:Adonis/Lucid/Database";
import { CollectExtract, Create, Extract } from "App/Dtos/Extract";
import { ExtractRepository } from "App/Repositories/extract-repository";

export class BuildUseCase {
  constructor(private extractRepository: ExtractRepository) {}

  async execute(data: CollectExtract[]): Promise<Extract[]> {
    let create: Create[] = [];

    for (const { template, entities } of data) {
      for (const { prefix: entity, values } of entities) {
        console.log(values);
        const insertCollumns = [
          ...new Set(values.flatMap((item) => `"${item.prefix}"`)),
        ].join(",");

        const insertValues = values
          .flatMap((item) => {
            if (typeof item.value === "string") {
              return `'${item.value}'`;
            }
            return item.value;
          })
          .join(",");

        const insertValuesQuery = `INSERT INTO "${template}_${entity}" (id, ${insertCollumns}) VALUES (gen_random_uuid(), ${insertValues})`;

        console.log({ insertValuesQuery });

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
