import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import Version from "App/Models/Version";
import { LeiauteVersion } from "App/Utils/constants";

export default class extends BaseSeeder {
  public static environment = ["development", "staging", "test"];

  public async run() {
    await Version.createMany([
      {
        prefix: LeiauteVersion.S_1_0,
        description: "Versão default adicionada 1.0",
      },
      {
        prefix: LeiauteVersion.S_1_1,
        description: "Versão default adicionada 1.1",
      },
    ]);
  }
}
