import { column } from "@ioc:Adonis/Lucid/Orm";
import { Base } from "./Base";

export default class Extract extends Base {
  @column()
  public leiaute: string;

  @column()
  public accumulation: number;

  @column()
  public xml_id: string;
}
