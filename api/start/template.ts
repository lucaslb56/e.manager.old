import Env from "@ioc:Adonis/Core/Env";
import Route from "@ioc:Adonis/Core/Route";
import * as Template from "App/Controllers/Http/Template";

Route.group(() => {
  Route.post("template", Template.create);
  Route.get("template", Template.list);
  Route.get("template/:id", Template.show);
  Route.post("template/build", Template.build);
  Route.post("template/generator", Template.generator);
  Route.post("template/extract", Template.extract);
})
  .prefix(Env.get("PREFIX"))
  .middleware("auth");
