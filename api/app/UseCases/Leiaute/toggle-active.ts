import { LeiauteRepository } from "App/Repositories/leiaute-repository";

export class ToggleActiveUseCase {
  constructor(private leiauteRepository: LeiauteRepository) {}

  async execute(id: string): Promise<void> {
    const leiaute = await this.leiauteRepository.findBy("id", id);

    if (!leiaute) throw new Error("Leiaute not found");

    return await this.leiauteRepository.toggleActive(leiaute);
  }
}
