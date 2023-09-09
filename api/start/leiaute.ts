import Env from "@ioc:Adonis/Core/Env";
import Route from "@ioc:Adonis/Core/Route";
import * as Leiaute from "App/Controllers/Http/Leiaute";

Route.group(() => {
  Route.get("leiaute", Leiaute.list);
  Route.get("leiaute/list", Leiaute.listLeiaute);
  Route.get("leiaute/columns", Leiaute.columns);
  Route.get("leiaute/export", Leiaute.export);
  Route.get("leiaute/:id", Leiaute.show);
})
  .prefix(Env.get("PREFIX"))
  .middleware("auth");
