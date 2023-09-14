import { LeiauteExtractType } from "App/Dtos/Leiaute";

export const S1010: LeiauteExtractType = {
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
  infoRubrica: [],
  inclusao: [],
  ideRubrica: [
    {
      name: "codRubr",
      type: "string",
    },
    {
      name: "ideTabRubr",
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
  dadosRubrica: [
    {
      name: "dscRubr",
      type: "string",
    },
    {
      name: "natRubr",
      type: "string",
    },
    {
      name: "tpRubr",
      type: "number",
    },
    {
      name: "codIncCP",
      type: "number",
    },
    {
      name: "codIncIRRF",
      type: "number",
    },
    {
      name: "codIncFGTS",
      type: "number",
    },
    {
      name: "codIncCPRP",
      type: "number",
    },
    {
      name: "tetoRemun",
      type: "string",
    },
    {
      name: "observacao",
      type: "string",
    },
  ],
  ideProcessoCP: [
    {
      name: "tpProc",
      type: "number",
    },
    {
      name: "nrProc",
      type: "number",
    },
    {
      name: "extDecisao",
      type: "number",
    },
    {
      name: "codSusp",
      type: "string",
    },
  ],
  ideProcessoIRRF: [
    {
      name: "nrProc",
      type: "number",
    },
    {
      name: "codSusp",
      type: "string",
    },
  ],
  ideProcessoFGTS: [
    {
      name: "nrProc",
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
