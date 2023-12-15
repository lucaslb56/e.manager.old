import { string as AdonisStringHelper } from "@ioc:Adonis/Core/Helpers";
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

  public async find(data: Partial<Version>): Promise<Version | null> {
    const entries = Object.entries(data);
    const values = entries.map(([_, value]) => value);
    const keys = entries.map(([key, _]) => AdonisStringHelper.snakeCase(key));
    const query = keys.map((key) => `${key} = ?`).join(" AND ");

    console.log({ keys, query, values });

    const version = await Model.query().whereRaw(query, values).first();

    if (!version) return null;

    return version?.toJSON() as Version;
  }
}
