import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Logger from "@ioc:Adonis/Core/Logger";
import { LeiauteQuery } from "App/Dtos/Leiaute";
import { ColumnsFactory } from "App/Factories/leiaute/columns";

export async function columns({
  request,
  response,
}: HttpContextContract): Promise<void> {
  try {
    const { prefix, version } = request.qs() as LeiauteQuery;

    const columnsUseCase = ColumnsFactory();

    const data = await columnsUseCase.execute({
      prefix,
      version,
    });

    return response.ok({ columns: data });
  } catch (error) {
    if (error instanceof Error) {
      return response.conflict({ message: error.message });
    }

    Logger.error(error);
    return response.internalServerError(error);
  }
}
