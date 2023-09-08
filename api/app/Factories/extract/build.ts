import { LucidExtractRepository } from "App/Repositories/lucid/extract-repository";
import { LucidLeiauteRepository } from "App/Repositories/lucid/leiaute-repository";
import { BuildUseCase } from "App/UseCases/Extract/build";

export function BuildFactory(): BuildUseCase {
  const extractRepository = new LucidExtractRepository();
  const leiauteRepository = new LucidLeiauteRepository();
  const useCase = new BuildUseCase(extractRepository, leiauteRepository);

  return useCase;
}
