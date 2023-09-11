import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Logger from "@ioc:Adonis/Core/Logger";
import { LeiauteQuery } from "App/Dtos/Leiaute";
import { ExtractBySocialFactory } from "App/Factories/leiaute/extracts-by-social";

export async function extractBySocial({
  request,
  response,
}: HttpContextContract): Promise<void> {
  try {
    const { e_social_id } = request.params();

    const { prefix, version } = request.qs() as LeiauteQuery;

    const extractBySocialUseCase = ExtractBySocialFactory();

    const extracts = await extractBySocialUseCase.execute({
      e_social_id,
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
