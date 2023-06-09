import { Signup, User } from "App/Dtos/User";

export interface UserRepository {
  create: (user: Signup) => Promise<User>;
  findBy: <T extends keyof User>(
    key: T,
    value: User[T]
  ) => Promise<User | null>;
}
