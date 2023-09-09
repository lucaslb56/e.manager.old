// import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
// import { LeiauteQuery } from "App/Dtos/Leiaute";
// import { ListFactory } from "App/Factories/extract/list-leiaute";

// export async function list({
//   request,
//   response,
// }: HttpContextContract): Promise<void> {
//   try {
//     const query: LeiauteQuery = request.qs() as LeiauteQuery;

//     const listUseCase = ListFactory();

//     const paginate = await listUseCase.execute(query);

//     return response.created(paginate);
//   } catch (error) {
//     console.log(error);
//     return response.conflict(error);
//   }
// }
