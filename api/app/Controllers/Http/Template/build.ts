import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { Template } from "App/Dtos/Template";
import { BuildFactory } from "App/Factories/template/build";
import { BuildValidator } from "App/Validators/template/build";

export async function build({
  request,
  response,
}: HttpContextContract): Promise<void> {
  try {
    const template = await request.validate(BuildValidator);

    const buildUseCase = BuildFactory();

    const entities = await buildUseCase.execute(template as Partial<Template>);

    return response.created(entities);
  } catch (error) {
    console.log(error);
    return response.conflict(error);
  }
}
