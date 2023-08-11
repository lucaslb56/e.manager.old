import {
  CollectExtract,
  Create,
  ExportToCSVRequest,
  Extract,
  List,
} from "App/Dtos/Extract";
import { Query } from "App/Dtos/Query";

export interface ExtractRepository {
  build: (data: Create[]) => Promise<Extract[]>;
  // create: (date: Create) => Promise<Extract>;
  findBy: <T extends keyof Extract>(
    key: T,
    value: Extract[T]
  ) => Promise<Extract | null>;
  list: (query: Query) => Promise<List>;
  findExistXMLId: (data: CollectExtract[]) => Promise<string[]>;
  generateExportData: (query: ExportToCSVRequest) => Promise<any[]>;
}
