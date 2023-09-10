import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Logger from "@ioc:Adonis/Core/Logger";
import { Query } from "App/Dtos/Query";
import { ActiveListFactory } from "App/Factories/leiaute/active-list";

export async function activeList({
  request,
  response,
}: HttpContextContract): Promise<void> {
  try {
    const { order = "asc" }: Query = request.qs();

    const activeListUseCase = ActiveListFactory();

    const list = await activeListUseCase.execute({
      order,
    });

    return response.ok(list);
  } catch (error) {
    if (error instanceof Error) {
      return response.conflict({ message: error.message });
    }

    Logger.error(error);
    return response.internalServerError(error);
  }
}
