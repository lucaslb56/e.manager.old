import { LucidTemplateRepository } from "App/Repositories/lucid/template-repository";
import { CreateUseCase } from "App/UseCases/Template/create";

export function CreateFactory(): CreateUseCase {
  const templateRepository = new LucidTemplateRepository();
  const useCase = new CreateUseCase(templateRepository);

  return useCase;
}
