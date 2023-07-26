import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { Create } from "App/Dtos/Column";
import { BuildFactory } from "App/Factories/column/build";
import { BuildValidator } from "App/Validators/column/build";

export async function build({
  request,
  response,
}: HttpContextContract): Promise<void> {
  try {
    const body: { columns: Create[] } = await request.validate(BuildValidator);

    const buildUseCase = BuildFactory();

    const entities = await buildUseCase.execute(body.columns);

    return response.created(entities);
  } catch (error) {
    console.log(error);

    return response.conflict(error);
  }
}
