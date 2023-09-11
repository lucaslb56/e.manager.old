import { LucidLeiauteRepository } from "App/Repositories/lucid/leiaute-repository";
import { ActiveListUseCase } from "App/UseCases/Leiaute/active-list";

export function ActiveListFactory(): ActiveListUseCase {
  const leiauteRepository = new LucidLeiauteRepository();
  const useCase = new ActiveListUseCase(leiauteRepository);

  return useCase;
}
