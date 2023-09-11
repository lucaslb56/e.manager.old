import { MultipartFileContract } from "@ioc:Adonis/Core/BodyParser";
import { DatabaseQueryBuilderContract } from "@ioc:Adonis/Lucid/Database";
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

export interface ListLeiauteData {
  [key: string]: number | string;
}

export interface LeiauteType {
  name: string;
  type: "number" | "string";
}

export type ListLeiaute = {
  meta: Meta;
  data: ListLeiauteData[];
};

export interface Extract {
  e_social_id: string;
  event_type: string;
  leiaute_id?: string;
  prefix?: string;
  version?: string;
  count: number;
}

export type ExtractList = {
  meta: Meta;
  data: Extract[];
};

export interface LeiauteExtractType {
  [key: string]: LeiauteType[];
}

export interface LeiauteQuery extends Query {
  prefix: keyof typeof LeiautePrefix;
  version: keyof typeof LeiauteVersion;
  e_social_id?: string;
  export_type?: "json" | "csv" | "xlsx";
  columns?: string;
}

export interface FilteredBetweenDate {
  query: LeiauteQuery;
  builder: DatabaseQueryBuilderContract;
}

export interface Build {
  query: LeiauteQuery;
  data: ListLeiauteData[];
}

export interface LeiauteColumn {
  key: string;
  type: "number" | "string";
}

export type LeiauteExtract = Pick<LeiauteQuery, "prefix" | "version"> & {
  leiautes: MultipartFileContract[];
};
