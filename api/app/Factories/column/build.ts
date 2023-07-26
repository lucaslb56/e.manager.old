import { LucidColllumnRepository } from "App/Repositories/lucid/column-repository";
import { BuildUseCase } from "App/UseCases/Column/build";

export function BuildFactory(): BuildUseCase {
  const collumnRepository = new LucidColllumnRepository();
  const useCase = new BuildUseCase(collumnRepository);

  return useCase;
}
