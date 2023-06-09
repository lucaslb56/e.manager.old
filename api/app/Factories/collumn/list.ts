import { LucidColllumnRepository } from "App/Repositories/lucid/collumn-repository";
import { ListUseCase } from "App/UseCases/Collumn/list";

export function ListFactory(): ListUseCase {
  const columnRepository = new LucidColllumnRepository();
  const useCase = new ListUseCase(columnRepository);

  return useCase;
}
