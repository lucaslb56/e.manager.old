import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { ShowFactory } from "App/Factories/template/show";

export async function show({
  params,
  response,
}: HttpContextContract): Promise<void> {
  try {
    const { id } = params;

    const showUseCase = ShowFactory();

    const template = await showUseCase.execute(id);

    return response.ok(template);
  } catch (error) {
    console.log(error);
    return response.conflict(error);
  }
}
