import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { CustomMessages, schema } from "@ioc:Adonis/Core/Validator";

const columns = schema.array().members(
  schema.object().members({
    entity_id: schema.string(),
    name: schema.string(),
    prefix: schema.string(),
    active: schema.boolean(),
    type: schema.string(),
  })
);

export class BuildValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    columns,
  });

  public messages: CustomMessages = {
    "columns.*.name.unique": "Já existe um column com este nome",
    "columns.*.prefix.unique": "Já existe um column com este nome",
  };
}
