import { LucidColllumnRepository } from "App/Repositories/lucid/collumn-repository";
import { BuildUseCase } from "App/UseCases/Collumn/build";

export function BuildFactory(): BuildUseCase {
  const collumnRepository = new LucidColllumnRepository();
  const useCase = new BuildUseCase(collumnRepository);

  return useCase;
}
