import Env from "@ioc:Adonis/Core/Env";
import Route from "@ioc:Adonis/Core/Route";
import { profile } from "App/Controllers/Http/User/profile";

Route.group(() => {
  Route.get("profile", profile);
})
  .prefix(Env.get("PREFIX"))
  .middleware("auth");
