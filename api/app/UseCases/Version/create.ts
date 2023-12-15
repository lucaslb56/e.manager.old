import { CreateVersion, Version } from "App/Dtos/Version";
import { VersionRepository } from "App/Repositories/version-repository";

export class CreateVersionUseCase {
  constructor(private versionRepository: VersionRepository) {}

  async execute(data: CreateVersion): Promise<Version> {
    const version = await this.versionRepository.find({
      prefix: `S_${data.prefix.replace(/\./g, "_")}`,
    });

    console.log({ version });

    if (version) throw new Error("Version already exists");

    return await this.versionRepository.create({
      description: data.description,
      prefix: `S_${data.prefix.replace(/\./g, "_")}`,
    });
  }
}
