import { Signup, User } from "App/Dtos/User";

import Model from "App/Models/User";
import { UserRepository } from "../user-repository";

export class LucidUserRepository implements UserRepository {
  public async create(data: Signup): Promise<User> {
    return (await Model.create(data)).toJSON() as User;
  }

  public async findBy<T extends keyof User>(
    key: T,
    value: User[T]
  ): Promise<User | null> {
    return ((await Model.findBy(key, value))?.toJSON() as User) ?? null;
  }
}
