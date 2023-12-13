import { BelongsTo, belongsTo, column } from "@ioc:Adonis/Lucid/Orm";
import { Base } from "./Base";
import Leiaute from "./Leiaute";

export default class Version extends Base {
  @column()
  public prefix: string;

  @column()
  public description: string;

  @belongsTo(() => Leiaute, { foreignKey: "version_id" })
  public leiaute: BelongsTo<typeof Leiaute>;
}
