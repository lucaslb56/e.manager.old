import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Logger from "@ioc:Adonis/Core/Logger";
import { Query } from "App/Dtos/Query";
import { ListFactory } from "App/Factories/leiaute/list";

export async function list({
  request,
  response,
}: HttpContextContract): Promise<void> {
  try {
    const { limit = 8, page = 1, order = "asc", search }: Query = request.qs();

    const listUseCase = ListFactory();

    const paginate = await listUseCase.execute({
      limit,
      page,
      order,
      search,
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
