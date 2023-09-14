import { LeiauteExtractType } from "App/Dtos/Leiaute";

export const S2206: LeiauteExtractType = {
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
  altContratual: [
    {
      name: "dtAlteracao",
      type: "string",
    },
    {
      name: "dtEf",
      type: "string",
    },
    {
      name: "dscAlt",
      type: "string",
    },
  ],
  vinculo: [
    {
      name: "tpRegPrev",
      type: "number",
    },
  ],
  infoRegimeTrab: [],
  infoCeletista: [
    {
      name: "tpRegJor",
      type: "number",
    },
    {
      name: "natAtividade",
      type: "number",
    },
    {
      name: "dtBase",
      type: "number",
    },
    {
      name: "cnpjSindCategProf",
      type: "string",
    },
  ],
  trabTemporario: [
    {
      name: "justProrr",
      type: "string",
    },
  ],
  aprend: [
    {
      name: "tpInsc",
      type: "string",
    },
    {
      name: "nrInsc",
      type: "string",
    },
  ],
  infoEstatutario: [
    {
      name: "tpPlanRP",
      type: "number",
    },
    {
      name: "IndTetoRGPS",
      type: "string",
    },
    {
      name: "indAbonoPerm",
      type: "string",
    },
  ],
  infoContrato: [
    {
      name: "nmCargo",
      type: "string",
    },
    {
      name: "CBOCargo",
      type: "string",
    },
    {
      name: "nmFuncao",
      type: "string",
    },
    {
      name: "CBOFuncao",
      type: "string",
    },
    {
      name: "acumCargo",
      type: "string",
    },
    {
      name: "codCateg",
      type: "string",
    },
  ],
  remuneracao: [
    {
      name: "vrSalFx",
      type: "number",
    },
    {
      name: "undSalFixo",
      type: "number",
    },
    {
      name: "dscSalVar",
      type: "string",
    },
  ],
  duracao: [
    {
      name: "tpContr",
      type: "number",
    },
    {
      name: "dtTerm",
      type: "string",
    },
    {
      name: "objDet",
      type: "string",
    },
  ],
  localTrabalho: [],
  localTrabGeral: [
    {
      name: "tpInsc",
      type: "number",
    },
    {
      name: "nrInsc",
      type: "string",
    },
    {
      name: "descComp",
      type: "string",
    },
  ],
  localTempDom: [
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
  ],
  horContratual: [
    {
      name: "qtdHrsSem",
      type: "number",
    },
    {
      name: "tpJornada",
      type: "number",
    },
    {
      name: "tmpParc",
      type: "number",
    },
    {
      name: "horNoturno",
      type: "string",
    },
    {
      name: "dscJorn",
      type: "string",
    },
  ],
  alvaraJudicial: [
    {
      name: "nrProcJud",
      type: "string",
    },
  ],
  observacoes: [
    {
      name: "observacao",
      type: "string",
    },
  ],
  treiCap: [
    {
      name: "codTreiCap",
      type: "string",
    },
  ],
};
