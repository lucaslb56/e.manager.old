import { LeiauteExtractType } from "App/Dtos/Leiaute";

export const S2299: LeiauteExtractType = {
  ideEvento: [
    {
      name: "indRetif",
      type: "number",
    },
    {
      name: "indGuia",
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
  ],
  infoDeslig: [
    {
      name: "mtvDeslig",
      type: "string",
    },
    {
      name: "dtDeslig",
      type: "string",
    },
    {
      name: "dtAvPrv",
      type: "string",
    },
    {
      name: "indPagtoAPI",
      type: "string",
    },
    {
      name: "dtProjFimAPI",
      type: "string",
    },
    {
      name: "pensAlim",
      type: "number",
    },
    {
      name: "percAliment",
      type: "number",
    },
    {
      name: "vrAlim",
      type: "number",
    },
    {
      name: "nrProcTrab",
      type: "string",
    },
  ],
  infoInterm: [
    {
      name: "dia",
      type: "number",
    },
  ],
  observacoes: [
    {
      name: "observacao",
      type: "string",
    },
  ],
  sucessaoVinc: [
    {
      name: "tpInsc",
      type: "number",
    },
    {
      name: "nrInsc",
      type: "string",
    },
  ],
  transfTit: [
    {
      name: "cpfSubstituto",
      type: "string",
    },
    {
      name: "dtNascto",
      type: "string",
    },
  ],
  mudancaCPF: [
    {
      name: "novoCPF	",
      type: "string",
    },
  ],
  verbasResc: [],
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
  ideEstabLot: [
    {
      name: "tpInsc",
      type: "number",
    },
    {
      name: "nrInsc",
      type: "string",
    },
    {
      name: "codLotacao",
      type: "string",
    },
  ],
  detVerbas: [
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
  infoAgNocivo: [
    {
      name: "grauExp",
      type: "number",
    },
  ],
  infoSimples: [
    {
      name: "indSimples",
      type: "number",
    },
  ],
  infoPerAnt: [],
  ideADC: [
    {
      name: "dtAcConv",
      type: "string",
    },
    {
      name: "tpAcConv",
      type: "string",
    },
    {
      name: "dsc",
      type: "string",
    },
  ],
  idePeriodo: [
    {
      name: "perRef",
      type: "string",
    },
  ],
  procJudTrab: [
    {
      name: "tpTrib",
      type: "number",
    },
    {
      name: "nrProcJud",
      type: "string",
    },
    {
      name: "codSusp",
      type: "string",
    },
  ],
  infoMV: [{ name: "indMV", type: "number" }],
  remunOutrEmpr: [
    {
      name: "tpInsc",
      type: "number",
    },
    {
      name: "nrInsc",
      type: "string",
    },
    {
      name: "codCateg",
      type: "number",
    },
    {
      name: "vlrRemunOE",
      type: "number",
    },
  ],
  procCS: [
    {
      name: "nrProcJud",
      type: "string",
    },
  ],
  remunAposDeslig: [
    {
      name: "indRemun",
      type: "number",
    },
    {
      name: "dtFimRemun",
      type: "string",
    },
  ],
  consigFGTS: [
    {
      name: "insConsig",
      type: "string",
    },
    {
      name: "nrContr",
      type: "string",
    },
  ],
};
