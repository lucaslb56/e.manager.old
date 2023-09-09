import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { LeiauteQuery } from "App/Dtos/Leiaute";
import { ExportFactory } from "App/Factories/leiaute/export";

export async function _export({
  request,
  response,
}: HttpContextContract): Promise<void> {
  try {
    const { date, prefix, version, e_social_id, export_type, columns } =
      request.qs() as LeiauteQuery;

    const exportUseCase = ExportFactory();

    const { path, filename } = await exportUseCase.execute({
      date,
      prefix,
      version,
      e_social_id,
      export_type,
      columns,
    });

    return response.attachment(path, filename);
  } catch (error) {
    console.log(error);
    return response.conflict(error);
  }
}
