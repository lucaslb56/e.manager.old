import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Logger from "@ioc:Adonis/Core/Logger";
import { LeiauteQuery } from "App/Dtos/Leiaute";
import { ListLeiauteFactory } from "App/Factories/leiaute/list-leiaute";

export async function listLeiaute({
  request,
  response,
}: HttpContextContract): Promise<void> {
  try {
    const {
      prefix,
      version,
      limit = 8,
      order = "asc",
      page = 1,
      search,
      e_social_id,
    }: LeiauteQuery = request.qs() as LeiauteQuery;

    const listLeiauteUseCase = ListLeiauteFactory();

    const paginate = await listLeiauteUseCase.execute({
      prefix,
      version,
      limit,
      order,
      page,
      search,
      e_social_id,
    });

    return response.ok(paginate);
  } catch (error) {
    if (error instanceof Error) {
      return response.conflict({ message: error.message });
    }

    Logger.error(error);
    return response.internalServerError(error);
  }
}
