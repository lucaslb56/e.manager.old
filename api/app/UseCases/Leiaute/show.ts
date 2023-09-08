import { Leiaute } from "App/Dtos/Leiaute";
import { LeiauteRepository } from "App/Repositories/leiaute-repository";

export class ShowUseCase {
  constructor(private leiauteRepository: LeiauteRepository) {}

  async execute(id: string): Promise<Leiaute> {
    const leiaute = await this.leiauteRepository.findBy("id", id);

    if (!leiaute) throw new Error();

    return leiaute;
  }
}
