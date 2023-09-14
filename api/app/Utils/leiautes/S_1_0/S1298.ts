import { LeiauteExtractType } from "App/Dtos/Leiaute";

export const S1298: LeiauteExtractType = {
  ideEvento: [
    { name: "indApuracao", type: "number" },
    {
      name: "indGuia",
      type: "number",
    },
    {
      name: "perApur",
      type: "string",
    },
    {
      name: "tpAmb",
      type: "number",
    },
    {
      name: "procEmi",
      type: "number",
    },
    {
      name: "verProc",
      type: "string",
    },
  ],
  ideEmpregador: [
    {
      name: "tpInsc",
      type: "number",
    },
    {
      name: "nrInsc",
      type: "string",
    },
  ],
};
