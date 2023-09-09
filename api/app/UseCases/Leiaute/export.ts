import Application from "@ioc:Adonis/Core/Application";
import { LeiauteQuery, ListLeiauteData } from "App/Dtos/Leiaute";
import { LeiauteRepository } from "App/Repositories/leiaute-repository";
import { randomUUID } from "crypto";
import { writeFile } from "fs/promises";
import { json2csv } from "json-2-csv";
import { utils, writeFile as xlsxWriteFile } from "xlsx";

const Exported = {
  csv: async (path: string, data: ListLeiauteData[]) => {
    const converted_data = await json2csv(data, {
      useDateIso8601Format: true,
    });

    return await writeFile(path, converted_data);
  },
  json: async (path: string, data: ListLeiauteData[]) => {
    const converted_data = JSON.stringify(data, null, 2);

    return await writeFile(path, converted_data);
  },
  xlsx: async (path: string, data: ListLeiauteData[]) => {
    const workbook = utils.book_new();

    utils.book_append_sheet(workbook, utils.json_to_sheet(data));

    return await xlsxWriteFile(workbook, path);
  },
};

export class ExportUseCase {
  constructor(private leiauteRepository: LeiauteRepository) {}

  async execute(
    query: LeiauteQuery
  ): Promise<{ path: string; filename: string }> {
    const template = await this.leiauteRepository.findBy(
      "prefix",
      query.prefix
    );

    if (!template || template.version !== query.version)
      throw new Error("Template not found");

    const final_dir = Application.resourcesPath("/templates");

    const final_filename = `${randomUUID()}.${query.export_type}`;

    const export_data = await this.leiauteRepository.export(query);

    if (!export_data.length) throw new Error("Data not found");

    const path = `${final_dir}/${final_filename}`;

    await Exported[query.export_type as keyof typeof Exported](
      path,
      export_data
    );

    return { path, filename: final_filename };
  }
}
