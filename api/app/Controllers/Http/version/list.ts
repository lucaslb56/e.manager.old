import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Logger from "@ioc:Adonis/Core/Logger";
import { ListVersionFactory } from "App/Factories/version/list";

export async function listVersion({
  response,
}: HttpContextContract): Promise<void> {
  try {
    const listVersionUseCase = ListVersionFactory();

    const versions = await listVersionUseCase.execute();

    return response.ok(versions);
  } catch (error) {
    if (error instanceof Error) {
      return response.conflict({ message: error.message });
    }

    Logger.error(error);
    return response.internalServerError(error);
  }
}
