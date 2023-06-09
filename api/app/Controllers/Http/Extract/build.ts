import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { CollectExtract } from "App/Dtos/Extract";
import { BuildFactory } from "App/Factories/extract/build";

export async function build({
  request,
  response,
}: HttpContextContract): Promise<void> {
  try {
    const extracts: CollectExtract[] = request.body() as CollectExtract[];

    const buildUseCase = BuildFactory();

    const data = await buildUseCase.execute(extracts);

    return response.created(data);
  } catch (error) {
    console.log(error);
    return response.conflict(error);
  }
}
