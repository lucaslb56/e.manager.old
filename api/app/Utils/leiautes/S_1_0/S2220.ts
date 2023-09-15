import { LeiauteExtractType } from "App/Dtos/Leiaute";

export const S2220: LeiauteExtractType = {
  ideEvento: [
    {
      name: "indRetif",
      type: "number",
    },
    {
      name: "nrRecibo",
      type: "number",
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
    {
      name: "codCateg",
      type: "string",
    },
  ],
  exMedOcup: [
    {
      name: "tpExameOcup",
      type: "number",
    },
  ],
  aso: [
    {
      name: "dtAso",
      type: "string",
    },
    {
      name: "resAso",
      type: "number",
    },
  ],
  exame: [
    {
      name: "dtExm",
      type: "string",
    },
    {
      name: "procRealizado",
      type: "string",
    },
    {
      name: "obsProc",
      type: "string",
    },
    {
      name: "ordExame",
      type: "number",
    },
    {
      name: "indResult",
      type: "number",
    },
  ],
  medico: [
    {
      name: "nmMed",
      type: "string",
    },
    {
      name: "nrCRM",
      type: "string",
    },
    {
      name: "ufCRM",
      type: "string",
    },
  ],
  respMonit: [
    {
      name: "cpfResp",
      type: "string",
    },
    {
      name: "nmResp",
      type: "string",
    },
    {
      name: "nrCRM",
      type: "string",
    },
    {
      name: "ufCRM",
      type: "string",
    },
  ],
};
