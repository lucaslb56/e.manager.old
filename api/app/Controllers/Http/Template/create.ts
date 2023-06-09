import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { Create } from "App/Dtos/Template";
import { CreateFactory } from "App/Factories/template/create";
import { CreateValidator } from "App/Validators/template/create";

export async function create({
  request,
  response,
}: HttpContextContract): Promise<void> {
  try {
    const body: Create = await request.validate(CreateValidator);

    const createUseCase = CreateFactory();

    const template = await createUseCase.execute(body);

    return response.created(template);
  } catch (error) {
    return response.conflict(error);
  }
}
