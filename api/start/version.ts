import Env from "@ioc:Adonis/Core/Env";
import Route from "@ioc:Adonis/Core/Route";
import { createVersion } from "App/Controllers/Http/version/create";
import { listVersion } from "App/Controllers/Http/version/list";

Route.group(() => {
  Route.post("versions", createVersion);
  Route.get("versions", listVersion);
})
  .prefix(Env.get("PREFIX"))
  .middleware("auth");
