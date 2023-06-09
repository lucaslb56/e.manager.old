import Env from "@ioc:Adonis/Core/Env";
import Route from "@ioc:Adonis/Core/Route";
import * as Extract from "App/Controllers/Http/Extract";

Route.group(() => {
  Route.post("extract/build", Extract.build);
  Route.get("extract", Extract.list);
})
  .prefix(Env.get("PREFIX"))
  .middleware("auth");
