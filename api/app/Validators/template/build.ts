import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { CustomMessages, schema } from "@ioc:Adonis/Core/Validator";

const columns = schema.array().members(
  schema.object().members({
    // entity_id: schema.string(),
    name: schema.string(),
    prefix: schema.string(),
    active: schema.boolean(),
    type: schema.string(),
  })
);

const entities = schema.array().members(
  schema.object().members({
    // template_id: schema.string(),
    name: schema.string(),
    prefix: schema.string(),
    active: schema.boolean(),
    parent: schema.string(),
    type: schema.string(),
    columns,
  })
);

export class BuildValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    name: schema.string(),
    prefix: schema.string(),
    version: schema.string(),
    entities,
  });

  public messages: CustomMessages = {};
}
