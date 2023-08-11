import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { generatorTemplate } from "App/Utils/generator-template";

import { XMLParser } from "fast-xml-parser";
import { readFile } from "fs/promises";

export async function generator({
  request,
  response,
}: HttpContextContract): Promise<void> {
  try {
    const template = request.file("template", {
      size: "10mb",
    });

    const xmlContent = await readFile(String(template?.tmpPath), "utf-8");

    const file = new XMLParser({
      ignoreAttributes: true,
      trimValues: true,
    }).parse(xmlContent);

    return response.ok(generatorTemplate(file.eSocial));
  } catch (error) {
    console.log(error);
    return response.conflict(error);
  }
}
