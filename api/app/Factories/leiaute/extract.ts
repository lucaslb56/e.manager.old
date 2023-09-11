import { LucidLeiauteRepository } from "App/Repositories/lucid/leiaute-repository";
import { ExtractUseCase } from "App/UseCases/Leiaute/extract";

export function ExtractFactory(): ExtractUseCase {
  const leiauteRepository = new LucidLeiauteRepository();
  const useCase = new ExtractUseCase(leiauteRepository);

  return useCase;
}
