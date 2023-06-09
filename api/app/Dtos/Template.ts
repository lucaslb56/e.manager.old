import { Base } from "./Base";
import { Entity } from "./Entity";
import { Meta } from "./Meta";

export interface Template extends Base {
  name: string;
  prefix: string;
  version: string;
  active: boolean;
  entities?: Entity[];
}

export type Create = Pick<Template, "name" | "prefix" | "version">;

export type List = {
  meta: Meta;
  data: Template[];
};
