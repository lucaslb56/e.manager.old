import { LucidTemplateRepository } from "App/Repositories/lucid/template-repository";
import { ListUseCase } from "App/UseCases/Template/list";

export function ListFactory(): ListUseCase {
  const templateRepository = new LucidTemplateRepository();
  const useCase = new ListUseCase(templateRepository);

  return useCase;
}
