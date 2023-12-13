import { CreateVersion, Version } from "App/Dtos/Version";

export interface VersionRepository {
  create: (data: CreateVersion) => Promise<Version>;
  list: () => Promise<Version[]>;
}
