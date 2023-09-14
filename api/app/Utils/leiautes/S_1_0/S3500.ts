import { LeiauteExtractType } from "App/Dtos/Leiaute";

export const S3500: LeiauteExtractType = {
  ideEvento: [
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
  infoExclusao: [
    {
      name: "tpEvento",
      type: "string",
    },
    {
      name: "nrRecEvt",
      type: "number",
    },
  ],
  ideProcTrab: [
    {
      name: "nrProcTrab",
      type: "number",
    },
    {
      name: "cpfTrab",
      type: "string",
    },
    {
      name: "perApurPgto",
      type: "string",
    },
  ],
};
