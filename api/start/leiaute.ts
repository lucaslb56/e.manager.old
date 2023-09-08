import Env from "@ioc:Adonis/Core/Env";
import Route from "@ioc:Adonis/Core/Route";
import * as Leiaute from "App/Controllers/Http/Leiaute";

Route.group(() => {
  Route.post("leiaute", Leiaute.create);
  Route.get("leiaute", Leiaute.list);
  Route.get("leiaute/:id", Leiaute.show);
  Route.post("leiaute/build", Leiaute.build);
  Route.post("leiaute/generator", Leiaute.generator);
  Route.post("leiaute/extract", Leiaute.extract);
})
  .prefix(Env.get("PREFIX"))
  .middleware("auth");
