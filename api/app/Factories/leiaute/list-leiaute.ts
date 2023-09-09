import { LucidLeiauteRepository } from "App/Repositories/lucid/leiaute-repository";
import { ListLeiauteUseCase } from "App/UseCases/Leiaute/list-leiaute";

export function ListLeiauteFactory(): ListLeiauteUseCase {
  const leiauteRepository = new LucidLeiauteRepository();
  const useCase = new ListLeiauteUseCase(leiauteRepository);

  return useCase;
}
