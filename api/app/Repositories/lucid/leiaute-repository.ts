import { Leiaute, List } from "App/Dtos/Leiaute";
import { Query } from "App/Dtos/Query";
import Model from "App/Models/Leiaute";
import { LeiauteRepository } from "../leiaute-repository";

export class LucidLeiauteRepository implements LeiauteRepository {
  public async findBy<T extends keyof Leiaute>(
    key: T,
    value: Leiaute[T]
  ): Promise<Leiaute | null> {
    const Leiaute = await Model.findBy(key, value);

    return (Leiaute?.toJSON() as Leiaute) ?? null;
  }

  public async list(query: Query): Promise<List> {
    return (
      await Model.query()
        .if(query.search, (build) =>
          build
            .where("name", "ilike", `%${query.search}%`)
            .orWhere("prefix", "ilike", `%${query.search}%`)
        )
        .orderBy("name", query.order)
        .paginate(Number(query.page), Number(query.limit))
    ).toJSON() as List;
  }
}
