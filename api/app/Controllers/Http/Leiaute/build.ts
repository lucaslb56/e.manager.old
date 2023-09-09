import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { LeiauteQuery, ListLeiauteData } from "App/Dtos/Leiaute";
import { BuildFactory } from "App/Factories/leiaute/build";

export async function build({
  request,
  response,
}: HttpContextContract): Promise<void> {
  try {
    const query = request.qs() as LeiauteQuery;

    const { data } = request.only(["data"]) as { data: ListLeiauteData[] };

    const buildUseCase = BuildFactory();

    const inserts = await buildUseCase.execute({
      query,
      data,
    });

    return response.created(inserts);
  } catch (error) {
    console.log(error);
    return response.conflict(error);
  }
}
