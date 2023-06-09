import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { Create } from "App/Dtos/Collumn";
import { BuildFactory } from "App/Factories/collumn/build";
import { BuildValidator } from "App/Validators/collumn/build";

export async function build({
  request,
  response,
}: HttpContextContract): Promise<void> {
  try {
    const body: { collumns: Create[] } = await request.validate(BuildValidator);

    const buildUseCase = BuildFactory();

    const entities = await buildUseCase.execute(body.collumns);

    return response.created(entities);
  } catch (error) {
    console.log(error);

    return response.conflict(error);
  }
}
