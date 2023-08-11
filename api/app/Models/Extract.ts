import { column } from "@ioc:Adonis/Lucid/Orm";
import { Base } from "./Base";

export default class Extract extends Base {
  @column()
  public template: string;

  @column()
  public accumulation: number;

  @column()
  public xml_id: string;
}
