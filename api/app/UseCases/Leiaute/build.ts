import Database from "@ioc:Adonis/Lucid/Database";
import { Leiaute } from "App/Dtos/Leiaute";
import { ColumnType } from "App/Utils/constants";
import { extractColumns } from "App/Utils/extract-columns";

export class BuildUseCase {
  public async execute(data: Partial<Leiaute>): Promise<void> {
    const columns = extractColumns(data);

    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS "entity_${data.prefix
        ?.toUpperCase()
        ?.replace("-", "_")}" (
        id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
        "_id" TEXT NOT NULL,
        "leiaute_id"UUID REFERENCES leiautes(id),
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
