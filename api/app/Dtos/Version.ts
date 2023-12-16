import { Base } from "./Base";

export interface Version extends Base {
  prefix: string;
  description?: string;
}

export type CreateVersion = Pick<Version, "prefix" | "description">;
