import { LeiauteExtractType } from "App/Dtos/Leiaute";

export const S1299: LeiauteExtractType = {
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
  infoFech: [
    {
      name: "evtRemun",
      type: "string",
    },
    {
      name: "evtPgtos",
      type: "string",
    },
    {
      name: "evtComProd",
      type: "string",
    },
    {
      name: "evtContratAvNP",
      type: "string",
    },
    {
      name: "evtInfoComplPer",
      type: "string",
    },
    {
      name: "indExcApur1250",
      type: "string",
    },
    {
      name: "transDCTFWeb",
      type: "string",
    },
    {
      name: "naoValid",
      type: "string",
    },
  ],
};
