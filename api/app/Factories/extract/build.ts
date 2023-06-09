import { LucidExtractRepository } from "App/Repositories/lucid/extract-repository";
import { BuildUseCase } from "App/UseCases/Extract/build";

export function BuildFactory(): BuildUseCase {
  const extractRepository = new LucidExtractRepository();
  const useCase = new BuildUseCase(extractRepository);

  return useCase;
}
