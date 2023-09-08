import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { generatorExtract } from "App/Utils/generator-extract";

export async function extract({
  request,
  response,
}: HttpContextContract): Promise<void> {
  try {
    const leiautes = request.files("leiautes", {
      size: "10mb",
    });

    const extracts = await generatorExtract(leiautes);

    return response.ok(extracts);
  } catch (error) {
    return response.conflict(error);
  }
}
