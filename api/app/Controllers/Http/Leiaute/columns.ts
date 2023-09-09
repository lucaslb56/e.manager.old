import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
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
    console.log(error);
    return response.conflict(error);
  }
}
