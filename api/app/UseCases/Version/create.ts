import { CreateVersion, Version } from "App/Dtos/Version";
import { VersionRepository } from "App/Repositories/version-repository";

export class CreateVersionUseCase {
  constructor(private versionRepository: VersionRepository) {}

  async execute(data: CreateVersion): Promise<Version> {
    return await this.versionRepository.create({
      description: data.description,
      prefix: `S_${data.prefix.replace(/\./g, "_")}`,
    });
  }
}
