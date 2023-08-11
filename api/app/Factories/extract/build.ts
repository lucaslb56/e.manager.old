import { LucidExtractRepository } from "App/Repositories/lucid/extract-repository";
import { LucidTemplateRepository } from "App/Repositories/lucid/template-repository";
import { BuildUseCase } from "App/UseCases/Extract/build";

export function BuildFactory(): BuildUseCase {
  const extractRepository = new LucidExtractRepository();
  const templateRepository = new LucidTemplateRepository();
  const useCase = new BuildUseCase(extractRepository, templateRepository);

  return useCase;
}
