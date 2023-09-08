import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { Leiaute } from "App/Dtos/Leiaute";
import { BuildFactory } from "App/Factories/leiaute/build";
import { BuildValidator } from "App/Validators/leiaute/build";

export async function build({
  request,
  response,
}: HttpContextContract): Promise<void> {
  try {
    const leiaute = await request.validate(BuildValidator);

    const buildUseCase = BuildFactory();

    const entities = await buildUseCase.execute(leiaute as Partial<Leiaute>);

    return response.created(entities);
  } catch (error) {
    console.log(error);
    return response.conflict(error);
  }
}
