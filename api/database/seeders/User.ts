import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import User from "App/Models/User";

export default class extends BaseSeeder {
  public static environment = ["development", "staging", "test"];

  public async run() {
    // await UserFactory.createMany(3);
    await User.create({
      email: "admin@mail.com",
      name: "admin",
      password: "admin@admin",
    });
  }
}
