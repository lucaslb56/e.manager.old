import { LeiauteExtractType } from "App/Dtos/Leiaute";

export const S1210: LeiauteExtractType = {
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
  ideBenef: [
    {
      name: "cpfBenef",
      type: "string",
    },
  ],
  infoPgto: [
    {
      name: "dtPgto",
      type: "string",
    },
    {
      name: "tpPgto",
      type: "number",
    },
    {
      name: "perRef",
      type: "string",
    },
    { name: "ideDmDev", type: "string" },
    {
      name: "vrLiq",
      type: "number",
    },
    {
      name: "paisResidExt",
      type: "string",
    },
  ],
  infoPgtoExt: [
    {
      name: "indNIF",
      type: "number",
    },
    {
      name: "nifBenef",
      type: "string",
    },
    {
      name: "frmTribut",
      type: "string",
    },
  ],
  endExt: [
    {
      name: "endDscLograd",
      type: "string",
    },
    {
      name: "endNrLograd",
      type: "string",
    },
    {
      name: "endComplem",
      type: "string",
    },
    {
      name: "endBairro",
      type: "string",
    },
    {
      name: "endCidade",
      type: "string",
    },
    {
      name: "endEstado",
      type: "string",
    },
    {
      name: "endCodPostal",
      type: "string",
    },
    {
      name: "telef",
      type: "string",
    },
  ],
};
