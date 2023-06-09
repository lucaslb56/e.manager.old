import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { CustomMessages, schema } from "@ioc:Adonis/Core/Validator";

export class QueryValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    page: schema.number.optional(),
    limit: schema.number.optional(),
    search: schema.string.optional(),
    order: schema.enum(["asc", "desc"]),
  });

  public messages: CustomMessages = {};
}
