import {
  BelongsTo,
  HasMany,
  belongsTo,
  column,
  hasMany,
} from "@ioc:Adonis/Lucid/Orm";
import { Base } from "./Base";
import Collumn from "./Collumn";
import Template from "./Template";

export default class Entity extends Base {
  @column()
  public templateId: string;

  @column()
  public name: string;

  @column()
  public prefix: string;

  @column()
  public active: boolean;

  @column()
  public parent: string;

  @column()
  public type: string;

  @belongsTo(() => Template)
  public template: BelongsTo<typeof Template>;

  @hasMany(() => Collumn)
  public collumns: HasMany<typeof Collumn>;
}
