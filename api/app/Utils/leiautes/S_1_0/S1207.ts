import { LeiauteExtractType } from "App/Dtos/Leiaute";

export const S1207: LeiauteExtractType = {
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
      name: "indApuracao",
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
  ideBenef: [
    {
      name: "cpfBenef",
      type: "string",
    },
  ],
  dmDev: [
    {
      name: "ideDmDev",
      type: "string",
    },
    {
      name: "nrBeneficio",
      type: "number",
    },
    {
      name: "indRRA",
      type: "string",
    },
  ],
  infoRRA: [
    {
      name: "tpProcRRA",
      type: "number",
    },
    {
      name: "nrProcRRA",
      type: "string",
    },
    {
      name: "descRRA",
      type: "string",
    },
    {
      name: "qtdMesesRRA",
      type: "number",
    },
  ],
  despProcJud: [
    {
      name: "vlrDespCustas",
      type: "number",
    },
    {
      name: "vlrDespAdvogados",
      type: "number",
    },
  ],
  ideAdv: [
    {
      name: "tpInsc",
      type: "number",
    },
    {
      name: "nrInsc",
      type: "string",
    },
    {
      name: "vlrAdv",
      type: "number",
    },
  ],
  infoPerApur: [],
  ideEstab: [
    {
      name: "tpInsc",
      type: "number",
    },
    {
      name: "nrInsc",
      type: "string",
    },
  ],
  itensRemun: [
    {
      name: "codRubr",
      type: "string",
    },
    {
      name: "ideTabRubr",
      type: "string",
    },
    {
      name: "qtdRubr",
      type: "number",
    },
    {
      name: "fatorRubr",
      type: "number",
    },
    {
      name: "vrRubr",
      type: "number",
    },
    {
      name: "indApurIR",
      type: "number",
    },
  ],
  infoPerAnt: [],
  idePeriodo: [
    {
      name: "perRef",
      type: "string",
    },
  ],
};
