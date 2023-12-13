import { CreateVersion, Version } from "App/Dtos/Version";
import Model from "App/Models/Version";
import { VersionRepository } from "../version-repository";

export class LucidVersionRepository implements VersionRepository {
  public async create(data: CreateVersion): Promise<Version> {
    return (await Model.create(data)).toJSON() as Version;
  }

  public async list(): Promise<Version[]> {
    const versions = await Model.all();
    return versions.map((version) => version.toJSON()) as Version[];
  }
}
