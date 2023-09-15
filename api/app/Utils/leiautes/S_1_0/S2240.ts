import { LeiauteExtractType } from "App/Dtos/Leiaute";

export const S2240: LeiauteExtractType = {
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
  infoExpRisco: [
    {
      name: "dtIniCondicao",
      type: "string",
    },
    {
      name: "dtFimCondicao",
      type: "string",
    },
  ],
  infoAmb: [
    {
      name: "localAmb",
      type: "number",
    },
    {
      name: "dscSetor",
      type: "string",
    },
    {
      name: "tpInsc",
      type: "number",
    },
    {
      name: "nrInsc",
      type: "string",
    },
  ],
  infoAtiv: [
    {
      name: "dscAtivDes",
      type: "string",
    },
  ],
  agNoc: [
    {
      name: "codAgNoc",
      type: "string",
    },
    {
      name: "dscAgNoc",
      type: "string",
    },
    {
      name: "tpAval",
      type: "number",
    },
    {
      name: "intConc",
      type: "string",
    },
    {
      name: "limTol",
      type: "string",
    },
    {
      name: "unMed",
      type: "number",
    },
    {
      name: "tecMedicao",
      type: "string",
    },
  ],
  epcEpi: [
    {
      name: "utilizEPC",
      type: "number",
    },
    {
      name: "eficEpc",
      type: "string",
    },
    {
      name: "utilizEPI",
      type: "number",
    },
    {
      name: "eficEpi",
      type: "string",
    },
  ],
  epi: [
    {
      name: "docAval",
      type: "string",
    },
  ],
  epiCompl: [
    {
      name: "medProtecao",
      type: "string",
    },
    {
      name: "condFuncto",
      type: "string",
    },
    {
      name: "usoInint",
      type: "string",
    },
    {
      name: "przValid",
      type: "string",
    },
    {
      name: "periodicTroca",
      type: "string",
    },
    {
      name: "higienizacao",
      type: "string",
    },
  ],
  respReg: [
    {
      name: "cpfResp",
      type: "string",
    },
    {
      name: "ideOC",
      type: "number",
    },
    {
      name: "dscOC",
      type: "string",
    },
    {
      name: "nrOC",
      type: "string",
    },
    {
      name: "ufOC",
      type: "string",
    },
    {
      name: "obs",
      type: "string",
    },
  ],
};
