import { LucidEntityRepository } from "App/Repositories/lucid/entity-repository";
import { BuildUseCase } from "App/UseCases/Entity/build";

export function BuildFactory(): BuildUseCase {
  const templateRepository = new LucidEntityRepository();
  const useCase = new BuildUseCase(templateRepository);

  return useCase;
}
