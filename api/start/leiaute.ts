import Env from "@ioc:Adonis/Core/Env";
import Route from "@ioc:Adonis/Core/Route";
import * as Leiaute from "App/Controllers/Http/Leiaute";

Route.group(() => {
  Route.get("leiaute", Leiaute.list);
  Route.get("leiaute/extract-list", Leiaute.extractList);
  Route.get("leiaute/active-list", Leiaute.activeList);
  Route.get("leiaute/columns", Leiaute.columns);
  Route.get("leiaute/export", Leiaute.export);
  Route.get("leiaute/:id", Leiaute.show);
  Route.get("leiaute/extracts/:e_social_id", Leiaute.extractBySocial);

  Route.patch("leiaute/:id/toggle-active", Leiaute.toggleActive);
  Route.post("leiaute/build", Leiaute.build);
  Route.post("leiaute/extract", Leiaute.extract);
  Route.post("leiaute", Leiaute.create);
})
  .prefix(Env.get("PREFIX"))
  .middleware("auth");
