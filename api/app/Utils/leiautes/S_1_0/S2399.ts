import { LeiauteExtractType } from "App/Dtos/Leiaute";

export const S2399: LeiauteExtractType = {
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
  ideTrabSemVinculo: [
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
  infoTSVTermino: [
    {
      name: "dtTerm",
      type: "string",
    },
    {
      name: "mtvDesligTSV",
      type: "number",
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
      type: "string",
    },
    {
      name: "nrProcTrab",
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
  infoSimples: [
    {
      name: "indSimples",
      type: "number",
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
  remunAposTerm: [
    {
      name: "indRemun",
      type: "number",
    },
    {
      name: "dtFimRemun",
      type: "string",
    },
  ],
};
