import Env from "@ioc:Adonis/Core/Env";
import Route from "@ioc:Adonis/Core/Route";
import * as Collumn from "App/Controllers/Http/Collumn";

Route.group(() => {
  Route.post("collumn/build", Collumn.build);
  Route.get("collumn", Collumn.list);
})
  .prefix(Env.get("PREFIX"))
  .middleware("auth");
