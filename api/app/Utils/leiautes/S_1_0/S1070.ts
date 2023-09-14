import { LeiauteExtractType } from "App/Dtos/Leiaute";

export const S1070: LeiauteExtractType = {
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
  infoProcesso: [],
  inclusao: [],
  ideProcesso: [
    {
      name: "tpProc",
      type: "number",
    },
    {
      name: "nrProc",
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
  dadosProc: [
    {
      name: "indAutoria",
      type: "number",
    },
    {
      name: "indMatProc",
      type: "number",
    },
    {
      name: "observacao",
      type: "string",
    },
  ],
  dadosProcJud: [
    {
      name: "ufVara",
      type: "string",
    },
    {
      name: "codMunic",
      type: "string",
    },
    {
      name: "idVara",
      type: "string",
    },
  ],
  infoSusp: [
    {
      name: "codSusp",
      type: "string",
    },
    {
      name: "indSusp",
      type: "number",
    },
    {
      name: "dtDecisao",
      type: "string",
    },
    {
      name: "indDeposito",
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
