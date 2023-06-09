import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { BuildFactory } from "App/Factories/entity/build";
import { BuildValidator } from "App/Validators/entity/build";

export async function build({
  request,
  response,
}: HttpContextContract): Promise<void> {
  try {
    const { entities } = await request.validate(BuildValidator);

    const buildUseCase = BuildFactory();

    const data = await buildUseCase.execute(entities);

    return response.created(data);
  } catch (error) {
    console.log(error);
    return response.conflict(error);
  }
}
