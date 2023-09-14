import { LeiauteExtractType } from "App/Dtos/Leiaute";

export const S2298: LeiauteExtractType = {
  ideEvento: [
    {
      name: "indRetif",
      type: "number",
    },
    {
      name: "nrRecibo",
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
  ideVinculo: [
    {
      name: "cpfTrab",
      type: "string",
    },
    {
      name: "matricula",
      type: "string",
    },
  ],
  infoReintegr: [
    {
      name: "tpReint",
      type: "number",
    },
    {
      name: "nrProcJud",
      type: "string",
    },
    {
      name: "nrLeiAnistia",
      type: "string",
    },
    {
      name: "dtEfetRetorno",
      type: "string",
    },
    {
      name: "dtEfeito",
      type: "string",
    },
  ],
};
