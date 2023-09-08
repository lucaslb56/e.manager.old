import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { Create } from "App/Dtos/Leiaute";
import { CreateFactory } from "App/Factories/leiaute/create";
import { CreateValidator } from "App/Validators/leiaute/create";

export async function create({
  request,
  response,
}: HttpContextContract): Promise<void> {
  try {
    const body: Create = await request.validate(CreateValidator);

    const createUseCase = CreateFactory();

    const leiaute = await createUseCase.execute(body);

    return response.created(leiaute);
  } catch (error) {
    return response.conflict(error);
  }
}
