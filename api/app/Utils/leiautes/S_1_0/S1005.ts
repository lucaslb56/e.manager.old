import { LeiauteExtractType } from "App/Dtos/Leiaute";

export const S1005: LeiauteExtractType = {
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
  infoEstab: [],
  inclusao: [],
  ideEstab: [
    {
      name: "tpInsc",
      type: "number",
    },
    {
      name: "nrInsc",
      type: "string",
    },
    {
      name: "iniValid",
      type: "string",
    },
    {
      name: "fimValid",
      type: "string",
    },
  ],
  dadosEstab: [
    {
      name: "cnaePrep",
      type: "string",
    },
    {
      name: "cnpjResp",
      type: "string",
    },
  ],
  aliqGilrat: [
    {
      name: "aliqRat",
      type: "number",
    },
    {
      name: "fap",
      type: "number",
    },
  ],
  procAdmJudRat: [
    {
      name: "tpProc",
      type: "number",
    },
    {
      name: "",
      type: "number",
    },
    {
      name: "codSusp",
      type: "string",
    },
  ],
  procAdmJudFap: [
    {
      name: "tpProc",
      type: "number",
    },
    {
      name: "nrProc",
      type: "number",
    },
    {
      name: "codSusp",
      type: "string",
    },
  ],
  infoCaepf: [
    {
      name: "tpCaepf",
      type: "number",
    },
  ],
  infoObra: [
    {
      name: "indSubstPatrObra",
      type: "number",
    },
  ],
  infoTrab: [],
  infoApr: [
    {
      name: "nrProcJud",
      type: "number",
    },
  ],
  infoEntEduc: [
    {
      name: "nrInsc",
      type: "string",
    },
  ],
  infoPCD: [
    {
      name: "nrProcJud",
      type: "number",
    },
  ],
  alteracao: [],
  novaValidade: [
    {
      name: "iniValid",
      type: "string",
    },
    {
      name: "fimValid",
      type: "string",
    },
  ],
  exclusao: [],
};
