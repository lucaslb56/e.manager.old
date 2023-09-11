import { LucidLeiauteRepository } from "App/Repositories/lucid/leiaute-repository";
import { ExtractListUseCase } from "App/UseCases/Leiaute/extract-list";

export function ExtractListFactory(): ExtractListUseCase {
  const leiauteRepository = new LucidLeiauteRepository();
  const useCase = new ExtractListUseCase(leiauteRepository);

  return useCase;
}
