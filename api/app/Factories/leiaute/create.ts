import { LucidLeiauteRepository } from "App/Repositories/lucid/leiaute-repository";
import { CreateUseCase } from "App/UseCases/Leiaute/create";

export function CreateFactory(): CreateUseCase {
  const leiauteRepository = new LucidLeiauteRepository();
  const useCase = new CreateUseCase(leiauteRepository);

  return useCase;
}
