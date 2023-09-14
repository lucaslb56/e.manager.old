import { LeiauteExtractType } from "App/Dtos/Leiaute";

export const S1260: LeiauteExtractType = {
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
  infoComProd: [],
  ideEstabel: [
    {
      name: "nrInscEstabRural",
      type: "string",
    },
  ],
  tpComerc: [
    {
      name: "indComerc",
      type: "number",
    },
    {
      name: "vrTotCom",
      type: "number",
    },
  ],
  ideAdquir: [
    {
      name: "tpInsc",
      type: "number",
    },
    {
      name: "nrInsc",
      type: "string",
    },
    {
      name: "vrComerc",
      type: "number",
    },
  ],
  nfs: [
    {
      name: "serie",
      type: "number",
    },
    {
      name: "nrDocto",
      type: "number",
    },
    {
      name: "dtEmisNF",
      type: "string",
    },
    {
      name: "vlrBruto",
      type: "string",
    },
    {
      name: "vrCPDescPR",
      type: "number",
    },
    {
      name: "vrRatDescPR",
      type: "number",
    },
    {
      name: "vrSenarDesc",
      type: "number",
    },
  ],
  infoProcJud: [
    {
      name: "tpProc",
      type: "number",
    },
    {
      name: "nrProc",
      type: "string",
    },
    {
      name: "codSusp",
      type: "string",
    },
    {
      name: "vrCPSusp",
      type: "number",
    },
    {
      name: "vrRatSusp",
      type: "number",
    },
    {
      name: "vrSenarSusp",
      type: "number",
    },
  ],
};
