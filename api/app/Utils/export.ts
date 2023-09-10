import { ListLeiauteData } from "App/Dtos/Leiaute";
import { writeFile } from "fs/promises";
import { json2csv } from "json-2-csv";
import { utils, writeFile as xlsxWriteFile } from "xlsx";

export const Exported = {
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
