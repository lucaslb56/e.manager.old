import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Logger from "@ioc:Adonis/Core/Logger";
import { LeiauteQuery, ListLeiauteData } from "App/Dtos/Leiaute";
import { BuildFactory } from "App/Factories/leiaute/build";

export async function build({
  request,
  response,
}: HttpContextContract): Promise<void> {
  try {
    const query = request.qs() as LeiauteQuery;

    const { extracts } = request.only(["extracts"]) as {
      extracts: ListLeiauteData[];
    };

    const buildUseCase = BuildFactory();

    const inserts = await buildUseCase.execute({
      query,
      data: extracts,
    });

    return response.created(inserts);
  } catch (error) {
    if (error instanceof Error) {
      return response.conflict({ message: error.message });
    }

    Logger.error(error);
    return response.internalServerError(error);
  }
}
