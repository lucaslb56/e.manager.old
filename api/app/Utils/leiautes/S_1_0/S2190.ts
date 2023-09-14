import { LeiauteExtractType } from "App/Dtos/Leiaute";

export const S2190: LeiauteExtractType = {
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
  infoRegPrelim: [
    {
      name: "cpfTrab",
      type: "string",
    },
    {
      name: "dtNascto",
      type: "string",
    },
    {
      name: "dtAdm",
      type: "string",
    },
    {
      name: "matricula",
      type: "string",
    },
    {
      name: "codCateg",
      type: "string",
    },
    {
      name: "natAtividade",
      type: "number",
    },
  ],
  infoRegCTPS: [
    {
      name: "CBOCargo",
      type: "number",
    },
    {
      name: "vrSalFx",
      type: "number",
    },
    {
      name: "undSalFixo",
      type: "number",
    },
    {
      name: "tpContr",
      type: "number",
    },
    {
      name: "dtTerm",
      type: "number",
    },
  ],
};
