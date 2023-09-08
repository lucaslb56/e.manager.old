import { column } from "@ioc:Adonis/Lucid/Orm";
import { Base } from "./Base";

export default class Leiaute extends Base {
  @column()
  public name: string;

  @column()
  public prefix: string;

  @column()
  public version: string;

  @column()
  public active: boolean;
}
