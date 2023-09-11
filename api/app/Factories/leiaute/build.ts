import { LucidLeiauteRepository } from "App/Repositories/lucid/leiaute-repository";
import { BuildUseCase } from "App/UseCases/Leiaute/build";

export function BuildFactory(): BuildUseCase {
  const leiauteRepository = new LucidLeiauteRepository();
  const useCase = new BuildUseCase(leiauteRepository);

  return useCase;
}
