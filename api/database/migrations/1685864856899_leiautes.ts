import BaseSchema from "@ioc:Adonis/Lucid/Schema";
import { LeiautePrefix, LeiauteVersion } from "App/Utils/constants";

export default class extends BaseSchema {
  protected tableName = "leiautes";

  private prefix = Object.values(LeiautePrefix);

  private version = Object.values(LeiauteVersion);

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table
        .uuid("id")
        .primary()
        .defaultTo(this.db.knexRawQuery("gen_random_uuid()"));
      table.string("name").notNullable();
      table.enum("prefix", this.prefix).notNullable();
      table.enum("version", this.version).notNullable();
      table.boolean("active").defaultTo(false);

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp("created_at", { useTz: true });
      table.timestamp("updated_at", { useTz: true });
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
