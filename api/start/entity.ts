import Env from "@ioc:Adonis/Core/Env";
import Route from "@ioc:Adonis/Core/Route";
import * as Entity from "App/Controllers/Http/Entity";

Route.group(() => {
  Route.post("entity/build", Entity.build);
  Route.get("entity", Entity.list);
})
  .prefix(Env.get("PREFIX"))
  .middleware("auth");
