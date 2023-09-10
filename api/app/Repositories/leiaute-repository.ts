import {
  Build,
  Leiaute,
  LeiauteColumn,
  LeiauteExtract,
  LeiauteQuery,
  List,
  ListLeiaute,
  ListLeiauteData,
} from "App/Dtos/Leiaute";
import { Query } from "App/Dtos/Query";

export interface LeiauteRepository {
  findBy: <T extends keyof Leiaute>(
    key: T,
    value: Leiaute[T]
  ) => Promise<Leiaute | null>;
  list: (query: Query) => Promise<List>;
  listLeiaute: (query: LeiauteQuery) => Promise<ListLeiaute>;
  export: (query: LeiauteQuery) => Promise<ListLeiauteData[]>;
  columns: (query: LeiauteQuery) => Promise<LeiauteColumn[]>;
  build: (build: Build) => Promise<void>;
  getExistsESocialId: (query: LeiauteQuery) => Promise<string[]>;
  extract: (data: LeiauteExtract) => Promise<ListLeiauteData[]>;
}
