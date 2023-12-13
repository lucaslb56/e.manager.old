import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Logger from "@ioc:Adonis/Core/Logger";
import { CreateVersionFactory } from "App/Factories/version/create";
import { CreateVersionValidator } from "App/Validators/version/create";

export async function createVersion({
  request,
  response,
}: HttpContextContract): Promise<void> {
  try {
    const { description, prefix } = await request.validate(
      CreateVersionValidator
    );

    const createVersionUseCase = CreateVersionFactory();

    const version = await createVersionUseCase.execute({
      description,
      prefix,
    });

    return response.created(version);
  } catch (error) {
    if (error instanceof Error) {
      return response.conflict({ message: error.message });
    }

    Logger.error(error);
    return response.internalServerError(error);
  }
}
