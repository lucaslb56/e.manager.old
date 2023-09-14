import { LeiauteExtractType } from "App/Dtos/Leiaute";

export const S1202: LeiauteExtractType = {
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
  ideTrabalhador: [
    {
      name: "cpfTrab",
      type: "string",
    },
  ],
  infoComplem: [
    {
      name: "nmTrab",
      type: "string",
    },
    {
      name: "dtNascto",
      type: "string",
    },
  ],
  sucessaoVinc: [
    {
      name: "cnpjOrgaoAnt",
      type: "string",
    },
    {
      name: "matricAnt",
      type: "string",
    },
    {
      name: "dtExercicio",
      type: "string",
    },
    {
      name: "observacao",
      type: "string",
    },
  ],
  dmDev: [
    {
      name: "ideDmDev",
      type: "string",
    },
    {
      name: "codCateg",
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
      name: "tpInsc",
      type: "string",
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
      type: "string",
    },
    {
      name: "nrInsc",
      type: "string",
    },
  ],
  remunPerApur: [
    {
      name: "matricula",
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
  infoPerAnt: [
    {
      name: "remunOrgSuc",
      type: "string",
    },
  ],
  idePeriodo: [
    {
      name: "perRef",
      type: "string",
    },
  ],
  remunPerAnt: [],
};
