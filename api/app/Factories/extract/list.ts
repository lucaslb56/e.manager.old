import { LucidExtractRepository } from "App/Repositories/lucid/extract-repository";
import { ListUseCase } from "App/UseCases/Extract/list";

export function ListFactory(): ListUseCase {
  const extractRepository = new LucidExtractRepository();
  const useCase = new ListUseCase(extractRepository);

  return useCase;
}
