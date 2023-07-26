import Env from "@ioc:Adonis/Core/Env";
import Route from "@ioc:Adonis/Core/Route";
import * as Column from "App/Controllers/Http/Column";

Route.group(() => {
  Route.post("column/build", Column.build);
  Route.get("column", Column.list);
})
  .prefix(Env.get("PREFIX"))
  .middleware("auth");
