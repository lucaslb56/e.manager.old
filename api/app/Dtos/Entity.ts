import { Base } from "./Base";
import { Column } from "./Column";
import { Meta } from "./Meta";

export interface Entity extends Base {
  leiaute_id: string;
  name: string;
  prefix: string;
  active: boolean;
  parent?: string;
  type: string;
  columns?: Column[];
}

export type Create = Omit<
  Entity,
  "id" | "created_at" | "updated_at" | "columns"
>;

export type List = {
  meta: Meta;
  data: Entity[];
};
