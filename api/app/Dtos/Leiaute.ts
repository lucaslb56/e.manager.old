import { Base } from "./Base";
import { Entity } from "./Entity";
import { Meta } from "./Meta";

export interface Leiaute extends Base {
  name: string;
  prefix: string;
  version: string;
  active: boolean;
  entities?: Entity[];
}

export type Create = Pick<Leiaute, "name" | "prefix" | "version">;

export type List = {
  meta: Meta;
  data: Leiaute[];
};
