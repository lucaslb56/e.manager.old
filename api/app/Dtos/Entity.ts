import { Base } from "./Base";
import { Collumn } from "./Collumn";
import { Meta } from "./Meta";

export interface Entity extends Base {
  template_id: string;
  name: string;
  prefix: string;
  active: boolean;
  parent?: string;
  type: string;
  collumns?: Collumn[];
}

export type Create = Omit<
  Entity,
  "id" | "created_at" | "updated_at" | "collumns"
>;

export type List = {
  meta: Meta;
  data: Entity[];
};
