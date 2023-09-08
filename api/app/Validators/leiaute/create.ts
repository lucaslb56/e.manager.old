import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { CustomMessages, rules, schema } from "@ioc:Adonis/Core/Validator";

export class CreateValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    name: schema.string({}, [
      rules.unique({ table: "leiautes", column: "name" }),
    ]),
    prefix: schema.string({}, [
      rules.unique({ table: "leiautes", column: "prefix" }),
    ]),
    version: schema.string(),
  });

  public messages: CustomMessages = {
    "name.unique": "Já existe um leiaute com este nome",
    "prefix.unique": "Já existe um leiaute com este nome",
  };
}
