import { LeiauteExtractType } from "App/Dtos/Leiaute";

export const S2230: LeiauteExtractType = {
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
    {
      name: "codCateg",
      type: "string",
    },
  ],
  infoAfastamento: [],
  iniAfastamento: [
    {
      name: "dtIniAfast",
      type: "string",
    },
    {
      name: "codMotAfast",
      type: "string",
    },
    {
      name: "infoMesmoMtv",
      type: "string",
    },
    {
      name: "tpAcidTransito",
      type: "string",
    },
    {
      name: "observacao",
      type: "string",
    },
  ],
  perAquis: [
    {
      name: "dtInicio",
      type: "string",
    },
    {
      name: "dtFim",
      type: "string",
    },
  ],
  infoCessao: [
    {
      name: "cnpjCess",
      type: "string",
    },
    {
      name: "infOnus",
      type: "number",
    },
  ],
  infoMandSind: [
    {
      name: "cnpjSind",
      type: "string",
    },
    {
      name: "infOnusRemun",
      type: "number",
    },
  ],
  infoMandElet: [
    {
      name: "cnpjMandElet",
      type: "string",
    },
    {
      name: "indRemunCargo",
      type: "string",
    },
  ],
  infoRetif: [
    {
      name: "origRetif",
      type: "number",
    },
    {
      name: "tpProc",
      type: "number",
    },
    {
      name: "nrProc",
      type: "string",
    },
  ],
  fimAfastamento: [
    {
      name: "dtTermAfast",
      type: "string",
    },
  ],
};
