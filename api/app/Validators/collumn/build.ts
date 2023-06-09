import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { CustomMessages, rules, schema } from "@ioc:Adonis/Core/Validator";

const collumns = schema.array().members(
  schema.object().members({
    entity_id: schema.string(),
    name: schema.string({}, [
      rules.unique({ table: "entities", column: "name" }),
    ]),
    prefix: schema.string({}, [
      rules.unique({ table: "entities", column: "prefix" }),
    ]),
    active: schema.boolean(),
    type: schema.string(),
  })
);

export class BuildValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    collumns,
  });

  public messages: CustomMessages = {
    "collumns.*.name.unique": "Já existe um collumn com este nome",
    "collumns.*.prefix.unique": "Já existe um collumn com este nome",
  };
}
