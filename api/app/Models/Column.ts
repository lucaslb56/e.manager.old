import { BelongsTo, belongsTo, column } from "@ioc:Adonis/Lucid/Orm";
import { Base } from "./Base";
import Entity from "./Entity";

export default class Column extends Base {
  @column()
  public entityId: string;

  @column()
  public name: string;

  @column()
  public prefix: string;

  @column()
  public active: boolean;

  @column()
  public type: string;

  @belongsTo(() => Entity)
  public entity: BelongsTo<typeof Entity>;
}
