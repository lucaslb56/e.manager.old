import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { CustomMessages, rules, schema } from "@ioc:Adonis/Core/Validator";

const entities = schema.array().members(
  schema.object().members({
    template_id: schema.string(),
    name: schema.string({}, [
      rules.unique({ table: "entities", column: "name" }),
    ]),
    prefix: schema.string({}, [
      rules.unique({ table: "entities", column: "prefix" }),
    ]),
    active: schema.boolean(),
    parent: schema.string(),
    type: schema.string(),
  })
);

export class BuildValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    entities,
  });

  public messages: CustomMessages = {
    "entities.*.name.unique": "Já existe um entity com este nome",
    "entities.*.prefix.unique": "Já existe um entity com este nome",
  };
}
