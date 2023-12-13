import { LucidVersionRepository } from "App/Repositories/lucid/version-repository";
import { ListVersionUseCase } from "App/UseCases/Version/list";

export function ListVersionFactory(): ListVersionUseCase {
  const userRepository = new LucidVersionRepository();
  const useCase = new ListVersionUseCase(userRepository);

  return useCase;
}
