import { LeiauteExtractType } from "App/Dtos/Leiaute";

export const S2231: LeiauteExtractType = {
  ideEvento: [
    {
      name: "indRetif",
      type: "number",
    },
    {
      name: "",
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
  infoCessao: [],
  iniCessao: [
    {
      name: "dtIniCessao",
      type: "string",
    },
    {
      name: "cnpjCess",
      type: "string",
    },
    {
      name: "respRemun",
      type: "string",
    },
  ],
  fimCessao: [
    {
      name: "dtTermCessao",
      type: "string",
    },
  ],
};
