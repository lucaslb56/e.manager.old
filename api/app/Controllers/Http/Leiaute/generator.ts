import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { generatorLeiaute } from "App/Utils/generator-leiaute";

import { XMLParser } from "fast-xml-parser";
import { readFile } from "fs/promises";

export async function generator({
  request,
  response,
}: HttpContextContract): Promise<void> {
  try {
    const leiaute = request.file("leiaute", {
      size: "10mb",
    });

    const xmlContent = await readFile(String(leiaute?.tmpPath), "utf-8");

    const file = new XMLParser({
      ignoreAttributes: true,
      trimValues: true,
    }).parse(xmlContent);

    return response.ok(generatorLeiaute(file.eSocial));
  } catch (error) {
    console.log(error);
    return response.conflict(error);
  }
}
