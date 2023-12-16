import Application from "@ioc:Adonis/Core/Application";
import { LeiauteQuery } from "App/Dtos/Leiaute";
import { LeiauteRepository } from "App/Repositories/leiaute-repository";
import { Exported } from "App/Utils/export";
import { randomUUID } from "crypto";

export class ExportUseCase {
  constructor(private leiauteRepository: LeiauteRepository) {}

  async execute(
    query: LeiauteQuery
  ): Promise<{ path: string; filename: string }> {
    const leiaute = await this.leiauteRepository.findBy({
      prefix: query.prefix,
    });

    if (!leiaute || leiaute.version.prefix !== query.version)
      throw new Error("Leiaute not found");

    const final_dir = Application.resourcesPath("/templates");

    const final_filename = `${randomUUID()}.${query.export_type}`;

    const export_data = await this.leiauteRepository.export(query);

    if (!export_data.length) throw new Error("Leiaute data not found");

    const path = `${final_dir}/${final_filename}`;

    await Exported[query.export_type as keyof typeof Exported](
      path,
      export_data
    );

    return { path, filename: final_filename };
  }
}
