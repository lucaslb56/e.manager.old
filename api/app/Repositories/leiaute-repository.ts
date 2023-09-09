import {
  Leiaute,
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
  columns: (query: LeiauteQuery) => Promise<string[]>;
}
