import { LucidLeiauteRepository } from "App/Repositories/lucid/leiaute-repository";
import { ListUseCase } from "App/UseCases/Leiaute/list";

export function ListFactory(): ListUseCase {
  const leiauteRepository = new LucidLeiauteRepository();
  const useCase = new ListUseCase(leiauteRepository);

  return useCase;
}
