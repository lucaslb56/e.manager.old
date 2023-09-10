import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Logger from "@ioc:Adonis/Core/Logger";
import { ToggleActiveFactory } from "App/Factories/leiaute/toggle-active";

export async function toggleActive({
  request,
  response,
}: HttpContextContract): Promise<void> {
  try {
    const { id } = request.params();

    console.log({ id });

    const toggleActiveUseCase = ToggleActiveFactory();

    await toggleActiveUseCase.execute(id);

    return response.created();
  } catch (error) {
    if (error instanceof Error) {
      return response.conflict({ message: error.message });
    }

    Logger.error(error);
    return response.internalServerError(error);
  }
}
