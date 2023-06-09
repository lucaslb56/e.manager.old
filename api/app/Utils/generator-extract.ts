import { MultipartFileContract } from "@ioc:Adonis/Core/BodyParser";
import { XMLParser } from "fast-xml-parser";
import { readFile } from "fs/promises";
import { extractValues } from "./extract-values";

export async function generatorExtract(templates: MultipartFileContract[]) {
  return await Promise.all(
    templates.map(async (template) => {
      const xmlContent = await readFile(String(template?.tmpPath), "utf-8");

      const file = new XMLParser({
        ignoreAttributes: true,
        trimValues: true,
      }).parse(xmlContent);

      const entities = extractValues(file.eSocial);

      return { template: template.clientName.split("_")[0], entities };
    })
  );
}
