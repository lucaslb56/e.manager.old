import { LucidLeiauteRepository } from "App/Repositories/lucid/leiaute-repository";
import { ColumnstUseCase } from "App/UseCases/Leiaute/columns";

export function ColumnsFactory(): ColumnstUseCase {
  const leiauteRepository = new LucidLeiauteRepository();
  const useCase = new ColumnstUseCase(leiauteRepository);

  return useCase;
}
