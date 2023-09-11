import { LucidLeiauteRepository } from "App/Repositories/lucid/leiaute-repository";
import { ShowUseCase } from "App/UseCases/Leiaute/show";

export function ShowFactory(): ShowUseCase {
  const leiauteRepository = new LucidLeiauteRepository();
  const useCase = new ShowUseCase(leiauteRepository);

  return useCase;
}
