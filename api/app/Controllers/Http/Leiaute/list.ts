import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
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
    console.log(error);
    return response.conflict(error);
  }
}
