import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { generatorExtract } from "App/Utils/generator-extract";

export async function extract({
  request,
  response,
}: HttpContextContract): Promise<void> {
  try {
    const templates = request.files("templates", {
      size: "10mb",
    });

    // for (const template of templates) {
    //   const contentType = template?.headers["content-type"];
    //   const isXML = /^application\/xml($|;)/.test(String(contentType));

    //   if (!isXML) return response.forbidden(template?.errors);
    // }

    const extracts = await generatorExtract(templates);

    console.log({ extracts });

    return response.ok(extracts);
  } catch (error) {
    return response.conflict(error);
  }
}
