import { LucidVersionRepository } from "App/Repositories/lucid/version-repository";
import { CreateVersionUseCase } from "App/UseCases/Version/create";

export function CreateVersionFactory(): CreateVersionUseCase {
  const userRepository = new LucidVersionRepository();
  const useCase = new CreateVersionUseCase(userRepository);

  return useCase;
}
