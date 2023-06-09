// import Env from "@ioc:Adonis/Core/Env";
// import Database from "@ioc:Adonis/Lucid/Database";
// import { test } from "@japa/runner";

// test.group("Example", (group) => {
//   const prefix = Env.get("PREFIX");

//   group.each.setup(async () => {
//     await Database.beginGlobalTransaction();
//     return () => Database.rollbackGlobalTransaction();
//   });

//   test("signup", async ({ client }) => {
//     const response = await client.post(`/${prefix}/auth/signup`).form({
//       name: "Carlinhos",
//       email: "carlinhos@gmail.com",
//       password: "123123",
//     });

//     console.log(response.body());

//     response.assertStatus(201);
//     response.assertBodyContains({
//       user: {},
//       token: {},
//     });
//   });
// });
