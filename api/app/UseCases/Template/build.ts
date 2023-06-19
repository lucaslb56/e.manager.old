import Database from "@ioc:Adonis/Lucid/Database";
import { Entity } from "App/Dtos/Entity";
import { Template } from "App/Dtos/Template";

enum CollumType {
  number = "BIGINT",
  string = "TEXT",
  boolean = "BOOLEAN",
  array = "TEXT",
  object = "TEXT",
}

export class BuildUseCase {
  public async execute(data: Partial<Template>): Promise<void> {
    for (const entity of data?.entities as Entity[]) {
      const createTableQuery = `
        CREATE TABLE IF NOT EXISTS "${data.prefix}_${entity.prefix}" (
          id UUID PRIMARY KEY,
          ${entity.collumns
            ?.map(
              (collumn) => `"${collumn.prefix}" ${CollumType[collumn.type]}`
            )
            .join(",\n")},
          created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
          updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        )`;

      await Database.rawQuery(createTableQuery);
    }
  }
}
