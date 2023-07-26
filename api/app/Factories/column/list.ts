import { LucidColumnRepository } from "App/Repositories/lucid/column-repository";
import { ListUseCase } from "App/UseCases/Column/list";

export function ListFactory(): ListUseCase {
  const columnRepository = new LucidColumnRepository();
  const useCase = new ListUseCase(columnRepository);

  return useCase;
}
