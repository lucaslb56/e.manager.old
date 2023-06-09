import { HasMany, column, hasMany } from "@ioc:Adonis/Lucid/Orm";
import { Base } from "./Base";
import Entity from "./Entity";

export default class Template extends Base {
  @column()
  public name: string;

  @column()
  public prefix: string;

  @column()
  public version: string;

  @column()
  public active: boolean;

  @hasMany(() => Entity)
  public entities: HasMany<typeof Entity>;
}
