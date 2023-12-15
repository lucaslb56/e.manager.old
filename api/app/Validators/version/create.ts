import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { CustomMessages, schema } from "@ioc:Adonis/Core/Validator";

export class CreateVersionValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    prefix: schema.string(),
    description: schema.string.optional(),
  });

  public messages: CustomMessages = {};
}
