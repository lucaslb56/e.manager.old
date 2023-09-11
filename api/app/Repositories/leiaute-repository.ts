import {
  Build,
  ExtractList,
  Leiaute,
  LeiauteColumn,
  LeiauteExtract,
  LeiauteQuery,
  List,
  ListLeiauteData,
} from "App/Dtos/Leiaute";
import { Query } from "App/Dtos/Query";

export interface LeiauteRepository {
  findBy: <T extends keyof Leiaute>(
    key: T,
    value: Leiaute[T]
  ) => Promise<Leiaute | null>;
  list: (query: Query) => Promise<List>;
  extracts: (query: LeiauteQuery) => Promise<ExtractList>;
  activeList: (query: Query) => Promise<Leiaute[]>;
  toggleActive: (leiaute: Leiaute) => Promise<void>;
  export: (query: LeiauteQuery) => Promise<ListLeiauteData[]>;
  columns: (query: LeiauteQuery) => Promise<LeiauteColumn[]>;
  build: (build: Build) => Promise<void>;
  getExistsESocialId: (query: LeiauteQuery) => Promise<string[]>;
  extract: (data: LeiauteExtract) => Promise<ListLeiauteData[]>;
  findManyByESocialId(query: LeiauteQuery): Promise<ListLeiauteData[]>;
}
