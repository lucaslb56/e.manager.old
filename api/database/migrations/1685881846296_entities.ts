import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "entities";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid("id").primary();
      table.string("name").notNullable();
      table.string("prefix").notNullable();
      table.string("parent").notNullable();
      table.string("type").notNullable();
      table.boolean("active").notNullable();

      table
        .uuid("template_id")
        .references("id")
        .inTable("templates")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
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
