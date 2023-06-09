import { LucidTemplateRepository } from "App/Repositories/lucid/template-repository";
import { ShowUseCase } from "App/UseCases/Template/show";

export function ShowFactory(): ShowUseCase {
  const templateRepository = new LucidTemplateRepository();
  const useCase = new ShowUseCase(templateRepository);

  return useCase;
}
