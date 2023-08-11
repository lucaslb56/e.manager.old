import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { ExportToCSVFactory } from "App/Factories/extract/export-to-csv";
export async function exportToCSV({
  request,
  response,
}: HttpContextContract): Promise<void> {
  try {
    const query = request.qs() as {
      prefix: string;
      date: { initial: string; final: string };
      _id: string;
    };

    const exportToCSVUseCase = ExportToCSVFactory();

    const { path, filename } = await exportToCSVUseCase.execute(query);

    return response.attachment(path, filename);
  } catch (error) {
    console.log(error);
    return response.conflict(error);
  }
}
