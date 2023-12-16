import { LucidLeiauteRepository } from "App/Repositories/lucid/leiaute-repository";
import { LucidVersionRepository } from "App/Repositories/lucid/version-repository";
import { CreateLeiauteUseCase } from "App/UseCases/Leiaute/create";

export function CreateLeiauteFactory(): CreateLeiauteUseCase {
  const leiauteRepository = new LucidLeiauteRepository();
  const versionRepository = new LucidVersionRepository();

  const useCase = new CreateLeiauteUseCase(
    leiauteRepository,
    versionRepository
  );

  return useCase;
}
