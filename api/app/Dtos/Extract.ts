import { Base } from "./Base";
import { Meta } from "./Meta";

export interface Extract extends Base {
  leiaute: string;
  accumulation: number;
  xml_id: string;
}

export type Create = Omit<Extract, "id" | "created_at" | "updated_at">;

export interface EntityExtract {
  prefix: string;
  values: ValueColumnExtract[];
}

export interface ValueColumnExtract {
  prefix: string;
  value: string | number;
}

export interface CollectExtract {
  leiaute: string;
  _id: string;
  entities: EntityExtract[];
}

export type List = {
  meta: Meta;
  data: Extract[];
};

export type Key = keyof Extract;

export interface ExportToCSVRequest {
  prefix: string;
  date?: {
    initial: string;
    final: string;
  };
  _id?: string;
}
