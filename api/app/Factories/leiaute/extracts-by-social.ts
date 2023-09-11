import { LucidLeiauteRepository } from "App/Repositories/lucid/leiaute-repository";
import { ExtractBySocialUseCase } from "App/UseCases/Leiaute/extracts-by-social";

export function ExtractBySocialFactory(): ExtractBySocialUseCase {
  const leiauteRepository = new LucidLeiauteRepository();
  const useCase = new ExtractBySocialUseCase(leiauteRepository);

  return useCase;
}
