import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Logger from "@ioc:Adonis/Core/Logger";
import { CreateLeiauteFactory } from "App/Factories/leiaute/create";

export async function create({
  request,
  response,
}: HttpContextContract): Promise<void> {
  try {
    const { name, prefix, version } = request.only([
      "name",
      "version",
      "prefix",
    ]);

    const createLeiauteUseCase = CreateLeiauteFactory();

    const leiaute = await createLeiauteUseCase.execute({
      name,
      prefix,
      version,
    });

    return response.created(leiaute);
  } catch (error) {
    if (error instanceof Error) {
      return response.conflict({ message: error.message });
    }

    Logger.error(error);
    return response.internalServerError(error);
  }
}
