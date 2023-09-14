import { LeiauteExtractType } from "App/Dtos/Leiaute";

export const S2501: LeiauteExtractType = {
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
  ideProc: [
    {
      name: "nrProcTrab",
      type: "string",
    },
    {
      name: "perApurPgto",
      type: "string",
    },
    {
      name: "obs",
      type: "string",
    },
  ],
  ideTrab: [
    {
      name: "cpfTrab",
      type: "string",
    },
  ],
  calcTrib: [
    {
      name: "perRef",
      type: "string",
    },
    {
      name: "vrBcCpMensal",
      type: "number",
    },
    {
      name: "vrBcCp13",
      type: "number",
    },
    {
      name: "vrRendIRRF",
      type: "number",
    },
    {
      name: "vrRendIRRF13",
      type: "number",
    },
  ],
  infoCRContrib: [
    {
      name: "tpCR",
      type: "string",
    },
    {
      name: "vrCR",
      type: "string",
    },
  ],
  infoCRIRRF: [
    {
      name: "tpCR",
      type: "string",
    },
    {
      name: "vrCR",
      type: "number",
    },
  ],
};
