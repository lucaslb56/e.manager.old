import { LeiauteExtractType } from "App/Dtos/Leiaute";

export const S2500: LeiauteExtractType = {
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
  ideResp: [
    {
      name: "tpInsc",
      type: "number",
    },
    {
      name: "nrInsc",
      type: "string",
    },
  ],
  infoProcesso: [
    {
      name: "origem",
      type: "number",
    },
    {
      name: "nrProcTrab",
      type: "string",
    },
    {
      name: "obsProcTrab",
      type: "string",
    },
  ],
  dadosCompl: [],
  infoProcJud: [
    {
      name: "dtSent",
      type: "string",
    },
    {
      name: "ufVara",
      type: "string",
    },
    {
      name: "codMunic",
      type: "string",
    },
    {
      name: "idVara",
      type: "string",
    },
  ],
  infoCCP: [
    {
      name: "dtCCP",
      type: "string",
    },
    {
      name: "tpCCP",
      type: "number",
    },
    {
      name: "cnpjCCP",
      type: "string",
    },
  ],
  ideTrab: [
    {
      name: "cpfTrab",
      type: "string",
    },
    {
      name: "nmTrab",
      type: "string",
    },
    {
      name: "dtNascto",
      type: "string",
    },
  ],
  dependente: [
    {
      name: "tpDep",
      type: "number",
    },
    {
      name: "cpfDep",
      type: "string",
    },
    {
      name: "descDep",
      type: "string",
    },
  ],
  infoContr: [
    {
      name: "tpContr",
      type: "number",
    },
    {
      name: "indContr",
      type: "string",
    },
    {
      name: "dtAdmOrig",
      type: "string",
    },
    {
      name: "indReint",
      type: "string",
    },
    {
      name: "indCateg",
      type: "string",
    },
    {
      name: "indNatAtiv",
      type: "string",
    },
    {
      name: "indMotDeslig",
      type: "string",
    },
    {
      name: "indUnic",
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
    {
      name: "dtInicio",
      type: "string",
    },
  ],
  infoCompl: [
    {
      name: "codCBO",
      type: "string",
    },
    {
      name: "natAtividade",
      type: "string",
    },
  ],
  remuneracao: [
    {
      name: "dtRemun",
      type: "string",
    },
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
  infoVinc: [
    {
      name: "tpRegTrab",
      type: "number",
    },
    {
      name: "tpRegPrev",
      type: "number",
    },
    {
      name: "dtAdm",
      type: "string",
    },
    {
      name: "tmpParc",
      type: "number",
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
      name: "clauAssec",
      type: "string",
    },
    {
      name: "objDet",
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
    {
      name: "matricAnt",
      type: "string",
    },
    {
      name: "dtTransf",
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
      name: "dtProjFimAPI",
      type: "string",
    },
  ],
  infoTerm: [
    {
      name: "dtTerm",
      type: "string",
    },
    {
      name: "mtvDesligTSV",
      type: "number",
    },
  ],
  mudCategAtiv: [
    {
      name: "codCateg",
      type: "string",
    },
    {
      name: "natAtividade",
      type: "number",
    },
    {
      name: "dtMudCategAtiv",
      type: "string",
    },
  ],
  unicContr: [
    {
      name: "matUnic",
      type: "string",
    },
    {
      name: "codCateg",
      type: "string",
    },
    {
      name: "dtInicio",
      type: "string",
    },
  ],
  ideEstab: [
    {
      name: "tpInsc",
      type: "number",
    },
    {
      name: "nrInsc",
      type: "string",
    },
  ],
  infoVlr: [
    {
      name: "compIni",
      type: "string",
    },
    {
      name: "compFim",
      type: "string",
    },
    {
      name: "repercProc",
      type: "number",
    },
    {
      name: "vrRemun",
      type: "number",
    },
    {
      name: "vrAPI",
      type: "number",
    },
    {
      name: "vr13API",
      type: "number",
    },
    {
      name: "vrInden",
      type: "number",
    },
    {
      name: "vrBaseIndenFGTS",
      type: "number",
    },
    {
      name: "pagDiretoResc",
      type: "string",
    },
  ],
  idePeriodo: [
    {
      name: "perRef",
      type: "string",
    },
  ],
  baseCalculo: [
    {
      name: "vrBcCpMensal",
      type: "number",
    },
    {
      name: "vrBcCp13",
      type: "number",
    },
    {
      name: "vrBcFgts",
      type: "number",
    },
    {
      name: "vrBcFgts13",
      type: "number",
    },
  ],
  infoAgNocivo: [
    {
      name: "grauExp",
      type: "number",
    },
  ],
  infoFGTS: [
    {
      name: "vrBcFgtsGuia",
      type: "number",
    },
    {
      name: "vrBcFgts13Guia",
      type: "number",
    },
    {
      name: "pagDireto",
      type: "string",
    },
  ],
  baseMudCateg: [
    {
      name: "codCateg",
      type: "string",
    },
    {
      name: "vrBcCPrev",
      type: "number",
    },
  ],
};
