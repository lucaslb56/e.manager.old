import { LeiauteExtractType } from "App/Dtos/Leiaute";

export const S1280: LeiauteExtractType = {
  ideEvento: [
    {
      name: "indRetif",
      type: "number",
    },
    {
      name: "nrRecibo",
      type: "string",
    },
    { name: "indApuracao", type: "number" },
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
  infoSubstPatr: [
    {
      name: "indSubstPatr",
      type: "number",
    },
    {
      name: "percRedContrib",
      type: "number",
    },
  ],
  infoSubstPatrOpPort: [
    {
      name: "codLotacao",
      type: "string",
    },
  ],
  infoAtivConcom: [
    {
      name: "fatorMes",
      type: "number",
    },
    {
      name: "fator13",
      type: "number",
    },
  ],
  infoPercTransf11096: [
    {
      name: "percTransf",
      type: "number",
    },
  ],
};
