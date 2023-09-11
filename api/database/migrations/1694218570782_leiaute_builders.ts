import BaseSchema from "@ioc:Adonis/Lucid/Schema";
import { ColumnType } from "App/Utils/constants";
import { Leiautes } from "App/Utils/leiautes";

export default class extends BaseSchema {
  public async up() {
    const entries = Object.entries(Leiautes);

    for (const [key, leiaute] of entries) {
      const table_name = key;

      this.schema.createTable(table_name, (table) => {
        table
          .uuid("id")
          .primary()
          .defaultTo(this.db.knexRawQuery("gen_random_uuid()"));
        Leiautes;
        table.text("e_social_id").notNullable();

        table
          .uuid("leiaute_id")
          .references("id")
          .inTable("leiautes")
          .onDelete("CASCADE")
          .onUpdate("CASCADE");

        table.string("event_type").notNullable();

        for (const [key, values] of Object.entries(leiaute)) {
          for (const value of values) {
            table.specificType(
              `${key.toLowerCase()}_${value.name.toLowerCase()}`,
              ColumnType[value.type]
            );
          }
        }

        /**
         * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
         */
        table.timestamp("created_at", { useTz: true }).defaultTo(this.now());
        table.timestamp("updated_at", { useTz: true }).defaultTo(this.now());
      });
    }
  }

  public async down() {
    const entries = Object.entries(Leiautes);

    for (const [key] of entries) {
      const table_name = key;
      this.schema.dropTableIfExists(table_name);
    }
  }
}
