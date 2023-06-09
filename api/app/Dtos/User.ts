import { Base } from "./Base";

export interface User extends Base {
  name: string;
  email: string;
  password: string;
}

export type Signup = Pick<User, "name" | "email" | "password">;

export type Signin = Pick<User, "email" | "password">;
