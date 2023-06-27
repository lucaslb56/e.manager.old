import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { generatorExtract } from "App/Utils/generator-extract";

export async function extract({
  request,
  response,
}: HttpContextContract): Promise<void> {
  try {
    const templates = request.files("templates", {
      size: "10mb",
      // extnames: [".xml"],
    });

    const extracts = await generatorExtract(templates);

    return response.ok(extracts);
  } catch (error) {
    return response.conflict(error);
  }
}
