import { Base } from "./Base";
import { Meta } from "./Meta";

export interface Extract extends Base {
  template: string;
  entity: string;
  collumn: string;
  value: string | number;
}

export type Create = Omit<Extract, "id" | "created_at" | "updated_at">;

export interface EntityExtract {
  prefix: string;
  values: ValueCollumnExtract[];
}

export interface ValueCollumnExtract {
  prefix: string;
  value: string | number;
}

export interface CollectExtract {
  template: string;
  entities: EntityExtract[];
}

export type List = {
  meta: Meta;
  data: Extract[];
};

export type Key = keyof Extract;
