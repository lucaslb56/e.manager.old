import Database from "@ioc:Adonis/Lucid/Database";
import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import Leiaute from "App/Models/Leiaute";
import { ColumnType } from "App/Utils/constants";
import { Leiautes } from "App/Utils/leiautes";

export default class extends BaseSeeder {
  public async run() {
    const create_leiautes_tables = Leiautes.map(
      async ({ prefix, version, ...leiaute }) => {
        const _leiaute = await Leiaute.query()
          .where("prefix", prefix)
          .andWhere("version", version)
          .first();

        const table_name = `${_leiaute?.prefix}_${_leiaute?.version.replace(
          ".",
          "_"
        )}`;

        const columns = [
          ...new Set(
            Object.entries(leiaute).flatMap(([key, values]) =>
              values.flatMap(
                (value: { name: string; type: string }) =>
                  `"${key}_${value.name}" ${ColumnType[value.type]}`
              )
            )
          ),
        ].join(",\n");

        const query = `
        CREATE TABLE IF NOT EXISTS "${table_name}"
        (
          id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
          "xml_id" TEXT NOT NULL,
          "template_id" UUID REFERENCES leiautes(id) ON DELETE CASCADE ON UPDATE CASCADE,
          ${columns},
          created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
          updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        )
      `;

        await Database.rawQuery(query);
      }
    );

    await Promise.all(create_leiautes_tables);
  }
}
