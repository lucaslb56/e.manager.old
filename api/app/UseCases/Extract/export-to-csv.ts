import { ExportToCSVRequest } from "App/Dtos/Extract";
import { ExtractRepository } from "App/Repositories/extract-repository";
import { LeiauteRepository } from "App/Repositories/leiaute-repository";
import { randomUUID } from "crypto";
import { writeFile } from "fs/promises";
import { json2csv } from "json-2-csv";

export class ExportToCSVUseCase {
  constructor(
    private extractRepository: ExtractRepository,
    private leiauteRepository: LeiauteRepository
  ) {}

  async execute(
    query: ExportToCSVRequest
  ): Promise<{ path: string; filename: string }> {
    const template = await this.leiauteRepository.findBy(
      "prefix",
      query.prefix
    );

    if (!template) throw new Error("Template not found");

    const final_filename = `${randomUUID()}.csv`;

    const data = await this.extractRepository.generateExportData(query);

    if (!data.length) throw new Error("Data not found");

    const csv_string = await json2csv(data, {
      useDateIso8601Format: true,
    });

    const path = `${process.cwd()}/resources/templates/${final_filename}`;

    await writeFile(path, csv_string);

    return { path, filename: final_filename };
  }
}
