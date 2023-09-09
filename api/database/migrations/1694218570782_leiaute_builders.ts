import BaseSchema from "@ioc:Adonis/Lucid/Schema";
import { Leiautes } from "App/Utils/leiautes";

export enum ColumnType {
  number = "bigInteger",
  string = "text",
}

export default class extends BaseSchema {
  public async up() {
    for (const { prefix, version, ...leiaute } of Leiautes) {
      const table_name = `${prefix}_${version}`;

      this.schema.createTable(table_name, (table) => {
        table
          .uuid("id")
          .primary()
          .defaultTo(this.db.knexRawQuery("gen_random_uuid()"));

        table.text("e_social_id").notNullable();

        table
          .uuid("leiaute_id")
          .references("id")
          .inTable("leiautes")
          .onDelete("CASCADE")
          .onUpdate("CASCADE");

        for (const [key, values] of Object.entries(leiaute)) {
          for (const value of values) {
            table[ColumnType[value.type]](
              `${key.toLowerCase()}_${value.name.toLowerCase()}`
            );
          }
        }
      });
    }
  }

  public async down() {
    for (const { prefix, version } of Leiautes) {
      const table_name = `${prefix}_${version}`;

      this.schema.dropTableIfExists(table_name);
    }
  }
}
