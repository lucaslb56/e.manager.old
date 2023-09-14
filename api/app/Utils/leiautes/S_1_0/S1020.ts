import { LeiauteExtractType } from "App/Dtos/Leiaute";

export const S1020: LeiauteExtractType = {
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
  infoLotacao: [],
  inclusao: [],
  ideLotacao: [
    {
      name: "codLotacao",
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
  dadosLotacao: [
    {
      name: "tpLotacao",
      type: "number",
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
  fpasLotacao: [
    {
      name: "fpas",
      type: "string",
    },
    {
      name: "codTercs",
      type: "number",
    },
    {
      name: "codTercsSusp",
      type: "number",
    },
  ],
  infoProcJudTerceiros: [],
  procJudTerceiro: [
    {
      name: "codTerc",
      type: "number",
    },
    {
      name: "nrProcJud",
      type: "number",
    },
    {
      name: "codSusp",
      type: "string",
    },
  ],
  infoEmprParcial: [
    {
      name: "tpInscContrat",
      type: "number",
    },
    {
      name: "nrInscContrat",
      type: "string",
    },
    {
      name: "tpInscProp",
      type: "number",
    },
    {
      name: "nrInscProp",
      type: "string",
    },
  ],
  dadosOpPort: [
    {
      name: "aliqRat",
      type: "number",
    },
    {
      name: "fap",
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
