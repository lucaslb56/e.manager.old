import { column } from "@ioc:Adonis/Lucid/Orm";
import { Base } from "./Base";

export default class Extract extends Base {
  @column()
  public template: string;

  @column()
  public entity: string;

  @column()
  public collumn: string;

  @column()
  public value: string | number;
}
