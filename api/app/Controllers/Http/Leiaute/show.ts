import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Logger from "@ioc:Adonis/Core/Logger";
import { ShowFactory } from "App/Factories/leiaute/show";

export async function show({
  params,
  response,
}: HttpContextContract): Promise<void> {
  try {
    const { id } = params;

    const showUseCase = ShowFactory();

    const leiaute = await showUseCase.execute(id);

    return response.ok(leiaute);
  } catch (error) {
    if (error instanceof Error) {
      return response.conflict({ message: error.message });
    }

    Logger.error(error);
    return response.internalServerError(error);
  }
}
