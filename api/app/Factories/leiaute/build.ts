import { BuildUseCase } from "App/UseCases/Leiaute/build";

export function BuildFactory(): BuildUseCase {
  const useCase = new BuildUseCase();

  return useCase;
}
