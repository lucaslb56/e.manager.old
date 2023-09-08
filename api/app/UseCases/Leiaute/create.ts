import { Create, Leiaute } from "App/Dtos/Leiaute";
import { LeiauteRepository } from "App/Repositories/leiaute-repository";

export class CreateUseCase {
  constructor(private leiauteRepository: LeiauteRepository) {}

  async execute(data: Create): Promise<Leiaute> {
    const leiaute = await this.leiauteRepository.findBy("name", data.name);

    if (leiaute) throw new Error();

    return await this.leiauteRepository.create(data);
  }
}
