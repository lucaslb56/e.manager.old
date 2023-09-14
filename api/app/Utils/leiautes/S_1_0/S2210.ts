import { LeiauteExtractType } from "App/Dtos/Leiaute";

export const S2210: LeiauteExtractType = {
  ideEvento: [
    {
      name: "tpAmb",
      type: "number",
    },
    {
      name: "indRetif",
      type: "number",
    },
    {
      name: "nrRecibo",
      type: "string",
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
  cat: [
    {
      name: "dtAcid",
      type: "string",
    },
    {
      name: "tpAcid",
      type: "number",
    },
    {
      name: "hrAcid",
      type: "string",
    },
    {
      name: "hrsTrabAntesAcid",
      type: "string",
    },
    {
      name: "tpCat",
      type: "number",
    },
    {
      name: "indCatObito",
      type: "string",
    },
    {
      name: "dtObito",
      type: "string",
    },
    {
      name: "indComunPolicia",
      type: "string",
    },
    {
      name: "codSitGeradora",
      type: "string",
    },
    {
      name: "iniciatCAT",
      type: "number",
    },
    {
      name: "obsCAT",
      type: "string",
    },
    {
      name: "ultDiaTrab",
      type: "string",
    },
    {
      name: "houveAfast",
      type: "string",
    },
  ],
  localAcidente: [
    {
      name: "tpLocal",
      type: "number",
    },
    {
      name: "dscLocal",
      type: "string",
    },
    {
      name: "tpLograd",
      type: "string",
    },
    {
      name: "dscLograd",
      type: "string",
    },
    {
      name: "nrLograd",
      type: "string",
    },
    {
      name: "complemento",
      type: "string",
    },
    {
      name: "bairro",
      type: "string",
    },
    {
      name: "cep",
      type: "string",
    },
    {
      name: "codMunic",
      type: "string",
    },
    {
      name: "uf",
      type: "string",
    },
    {
      name: "pais",
      type: "string",
    },
    {
      name: "codPostal",
      type: "string",
    },
  ],
  ideLocalAcid: [
    {
      name: "tpInsc",
      type: "number",
    },
    {
      name: "nrInsc",
      type: "string",
    },
  ],
  parteAtingida: [
    {
      name: "codParteAting",
      type: "string",
    },
    {
      name: "lateralidade",
      type: "number",
    },
  ],
  agenteCausador: [
    {
      name: "codAgntCausador",
      type: "number",
    },
  ],
  atestado: [
    {
      name: "dtAtendimento",
      type: "string",
    },
    {
      name: "hrAtendimento",
      type: "string",
    },
    {
      name: "indInternacao",
      type: "string",
    },
    {
      name: "durTrat",
      type: "string",
    },
    {
      name: "indAfast",
      type: "string",
    },
    {
      name: "dscLesao",
      type: "string",
    },
    {
      name: "dscCompLesao",
      type: "string",
    },
    {
      name: "diagProvavel",
      type: "string",
    },
    {
      name: "codCID",
      type: "string",
    },
    {
      name: "observacao",
      type: "string",
    },
  ],
  emitente: [
    {
      name: "nmEmit",
      type: "string",
    },
    {
      name: "ideOC",
      type: "number",
    },
    {
      name: "nrOC",
      type: "string",
    },
    {
      name: "ufOC",
      type: "string",
    },
  ],
  catOrigem: [
    {
      name: "nrRecCatOrig",
      type: "string",
    },
  ],
};
