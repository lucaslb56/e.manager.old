import { LeiautePrefix, LeiauteVersion } from "App/Utils/constants";
import { Base } from "./Base";
import { Meta } from "./Meta";
import { Query } from "./Query";

export interface Leiaute extends Base {
  name: string;
  prefix: string;
  version: string;
  active: boolean;
}

export type Create = Pick<Leiaute, "name" | "prefix" | "version">;

export type List = {
  meta: Meta;
  data: Leiaute[];
};

export interface LeiauteQuery extends Query {
  prefix: keyof typeof LeiautePrefix;
  version: keyof typeof LeiauteVersion;
}
