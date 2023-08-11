import { LucidExtractRepository } from "App/Repositories/lucid/extract-repository";
import { LucidTemplateRepository } from "App/Repositories/lucid/template-repository";
import { ExportToCSVUseCase } from "App/UseCases/Extract/export-to-csv";

export function ExportToCSVFactory(): ExportToCSVUseCase {
  const extractRepository = new LucidExtractRepository();
  const templateRepository = new LucidTemplateRepository();
  const useCase = new ExportToCSVUseCase(extractRepository, templateRepository);

  return useCase;
}
