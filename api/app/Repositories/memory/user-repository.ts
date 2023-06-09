import Hash from "@ioc:Adonis/Core/Hash";
import { Signup, User } from "App/Dtos/User";
import { randomUUID } from "crypto";
import { UserRepository } from "../user-repository";

export class MemoryUserRepository implements UserRepository {
  public items: User[] = [];

  public async create(data: Signup): Promise<User> {
    const user: User = {
      id: randomUUID(),
      name: data.name,
      email: data.email,
      password: await Hash.make(data.password),
      created_at: new Date(),
      updated_at: new Date(),
    };

    this.items.push(user);

    return user;
  }

  public async findBy<T extends keyof User>(
    key: T,
    value: User[T]
  ): Promise<User | null> {
    return this.items.find((item) => item[key] === value) ?? null;
  }
}
