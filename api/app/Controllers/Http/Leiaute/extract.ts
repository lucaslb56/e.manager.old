import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Logger from "@ioc:Adonis/Core/Logger";
import { LeiauteQuery } from "App/Dtos/Leiaute";
import { ExtractFactory } from "App/Factories/leiaute/extract";

export async function extract({
  request,
  response,
}: HttpContextContract): Promise<void> {
  try {
    const { prefix, version } = request.qs() as LeiauteQuery;

    const extractUseCase = ExtractFactory();

    const leiautes = request.files("leiautes", {
      size: "20mb",
    });

    const extracts = await extractUseCase.execute({
      leiautes,
      prefix,
      version,
    });

    return response.ok({ extracts });
  } catch (error) {
    if (error instanceof Error) {
      return response.conflict({ message: error.message });
    }

    Logger.error(error);
    return response.internalServerError(error);
  }
}
