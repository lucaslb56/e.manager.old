import { Version } from "App/Dtos/Version";
import { VersionRepository } from "App/Repositories/version-repository";

export class ListVersionUseCase {
  constructor(private versionRepository: VersionRepository) {}

  async execute(): Promise<Version[]> {
    return await this.versionRepository.list();
  }
}
