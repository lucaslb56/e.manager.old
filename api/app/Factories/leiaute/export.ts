import { LucidLeiauteRepository } from "App/Repositories/lucid/leiaute-repository";
import { ExportUseCase } from "App/UseCases/Leiaute/export";

export function ExportFactory(): ExportUseCase {
  const leiauteRepository = new LucidLeiauteRepository();
  const useCase = new ExportUseCase(leiauteRepository);

  return useCase;
}
