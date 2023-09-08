import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { ShowFactory } from "App/Factories/leiaute/show";

export async function show({
  params,
  response,
}: HttpContextContract): Promise<void> {
  try {
    const { id } = params;

    const showUseCase = ShowFactory();

    const leiaute = await showUseCase.execute(id);

    return response.ok(leiaute);
  } catch (error) {
    console.log(error);
    return response.conflict(error);
  }
}
