import { HasOne, column, hasOne } from "@ioc:Adonis/Lucid/Orm";
import { Base } from "./Base";
import Version from "./Version";

export default class Leiaute extends Base {
  @column()
  public name: string;

  @column()
  public prefix: string;

  @column()
  public version_id: string;

  @hasOne(() => Version, {
    foreignKey: "version_id",
  })
  public version: HasOne<typeof Version>;

  @column()
  public active: boolean;
}
