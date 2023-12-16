import { CreateLeiaute, Leiaute } from "App/Dtos/Leiaute";
import { LeiauteRepository } from "App/Repositories/leiaute-repository";
import { VersionRepository } from "App/Repositories/version-repository";

export class CreateLeiauteUseCase {
  constructor(
    private leiauteRepository: LeiauteRepository,
    private versionRepository: VersionRepository
  ) {}

  async execute(data: CreateLeiaute & { version: string }): Promise<Leiaute> {
    const version = await this.versionRepository.find({
      prefix: data.version,
    });

    if (!version) throw new Error("Version not found.");

    const leiaute = await this.leiauteRepository.findBy({
      prefix: data.prefix,
      version_id: version.id,
    });

    if (leiaute) throw new Error("Leiaute already exists.");

    return await this.leiauteRepository.create({
      prefix: data.prefix,
      name: data.name,
      version_id: version.id,
    });
  }
}
