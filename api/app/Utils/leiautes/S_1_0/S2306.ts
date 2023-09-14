import { LeiauteExtractType } from "App/Dtos/Leiaute";

export const S2306: LeiauteExtractType = {
  ideEvento: [
    {
      name: "indRetif",
      type: "number",
    },
    {
      name: "nrRecibo",
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
  infoTSVAlteracao: [
    {
      name: "dtAlteracao",
      type: "string",
    },
    {
      name: "natAtividade",
      type: "number",
    },
  ],
  infoComplementares: [],
  cargoFuncao: [
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
      type: "number",
    },
  ],
  infoDirigenteSindical: [
    {
      name: "tpRegPrev",
      type: "number",
    },
  ],
  infoTrabCedido: [
    {
      name: "tpRegPrev",
      type: "number",
    },
  ],
  infoMandElet: [
    {
      name: "indRemunCargo",
      type: "string",
    },
    {
      name: "tpRegPrev",
      type: "number",
    },
  ],
  infoEstagiario: [
    {
      name: "natEstagio",
      type: "string",
    },
    {
      name: "nivEstagio",
      type: "number",
    },
    {
      name: "areaAtuacao",
      type: "string",
    },
    {
      name: "nrApol",
      type: "string",
    },
    {
      name: "dtPrevTerm",
      type: "string",
    },
  ],
  instEnsino: [
    {
      name: "cnpjInstEnsino",
      type: "string",
    },
    {
      name: "nmRazao",
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
  ageIntegracao: [
    {
      name: "cnpjAgntInteg",
      type: "string",
    },
  ],
  supervisorEstagio: [
    {
      name: "cpfSupervisor",
      type: "string",
    },
  ],
};
