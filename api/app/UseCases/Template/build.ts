import Database from "@ioc:Adonis/Lucid/Database";
import { Template } from "App/Dtos/Template";
import { extractColumns } from "App/Utils/extract-columns";

enum ColumnType {
  number = "NUMERIC",
  string = "TEXT",
  boolean = "BOOLEAN",
  array = "TEXT",
  object = "TEXT",
}

export class BuildUseCase {
  public async execute(data: Partial<Template>): Promise<void> {
    const columns = extractColumns(data);

    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS "entity_${data.prefix
        ?.toUpperCase()
        ?.replace("-", "_")}" (
        id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
        "_id" TEXT NOT NULL,
        "template_id"UUID REFERENCES templates(id),
        ${columns
          ?.flatMap(
            (column) =>
              `"${column.prefix.toLowerCase()}" ${ColumnType[column.type]} NULL`
          )
          .join(",\n")},
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )
    `;

    await Database.rawQuery(createTableQuery);
  }
}
