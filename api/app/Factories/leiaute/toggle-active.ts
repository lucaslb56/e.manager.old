import { LucidLeiauteRepository } from "App/Repositories/lucid/leiaute-repository";
import { ToggleActiveUseCase } from "App/UseCases/Leiaute/toggle-active";

export function ToggleActiveFactory(): ToggleActiveUseCase {
  const leiauteRepository = new LucidLeiauteRepository();
  const useCase = new ToggleActiveUseCase(leiauteRepository);

  return useCase;
}
