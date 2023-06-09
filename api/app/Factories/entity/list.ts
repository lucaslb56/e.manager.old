import { LucidEntityRepository } from "App/Repositories/lucid/entity-repository";
import { ListUseCase } from "App/UseCases/Entity/list";

export function ListFactory(): ListUseCase {
  const entityRepository = new LucidEntityRepository();
  const useCase = new ListUseCase(entityRepository);

  return useCase;
}
