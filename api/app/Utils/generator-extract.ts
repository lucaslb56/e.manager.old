import { MultipartFileContract } from "@ioc:Adonis/Core/BodyParser";
import { XMLParser } from "fast-xml-parser";
import { readFile } from "fs/promises";
import { extractValues } from "./extract-values";

export async function generatorExtract(leiautes: MultipartFileContract[]) {
  return await Promise.all(
    leiautes.map(async (leiaute) => {
      const xmlContent = await readFile(String(leiaute?.tmpPath), "utf-8");

      const file = new XMLParser({
        ignoreAttributes: false,
        trimValues: true,
      }).parse(xmlContent);

      const extract = extractValues(file.eSocial);

      const _id = extract
        .flatMap(
          (entity) =>
            entity.values.find((value) => value.prefix === "@_Id")?.value || []
        )
        .toString();

      const regex_leiaute = /(S\d{4})|(S-\d{4})/;
      const entities = extract.filter((entity) =>
        entity.values.find((value) => value.prefix !== "@_Id")
      );

      const is_leiaute = leiaute.clientName
        .split(".")[0]
        .match(regex_leiaute) as RegExpMatchArray;

      return {
        _id,
        leiaute: is_leiaute[0].includes("-")
          ? is_leiaute[0]
          : is_leiaute[0].replace("S", "S-"),
        entities,
      };
    })
  );
}
