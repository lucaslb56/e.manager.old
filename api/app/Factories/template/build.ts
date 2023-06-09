import { BuildUseCase } from "App/UseCases/Template/build";

export function BuildFactory(): BuildUseCase {
  const useCase = new BuildUseCase();

  return useCase;
}
