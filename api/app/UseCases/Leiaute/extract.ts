import { LeiauteExtract, ListLeiauteData } from "App/Dtos/Leiaute";
import { LeiauteRepository } from "App/Repositories/leiaute-repository";
import { extractData } from "App/Utils/extract";

export class ExtractUseCase {
  constructor(private leiauteRepository: LeiauteRepository) {}

  async execute({
    leiautes,
    prefix,
    version,
  }: LeiauteExtract): Promise<ListLeiauteData[]> {
    const leiaute = await this.leiauteRepository.findBy("prefix", prefix);

    if (!leiaute || leiaute.version !== version)
      throw new Error("Leiaute not found");

    const extracts = await this.leiauteRepository.extract({
      leiautes,
      prefix,
      version,
    });

    if (!extracts.length) throw new Error("Data not found");

    return extractData(extracts, leiaute);
  }
}
