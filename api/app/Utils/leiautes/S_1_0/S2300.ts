import { LeiauteExtractType } from "App/Dtos/Leiaute";

export const S2300: LeiauteExtractType = {
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
  trabalhador: [
    {
      name: "cpfTrab",
      type: "string",
    },
    {
      name: "nmTrab",
      type: "string",
    },
    {
      name: "sexo",
      type: "string",
    },
    {
      name: "racaCor",
      type: "number",
    },
    {
      name: "estCiv",
      type: "number",
    },
    {
      name: "grauInstr",
      type: "number",
    },
    {
      name: "nmSoc",
      type: "string",
    },
  ],
  nascimento: [
    {
      name: "dtNascto",
      type: "string",
    },
    {
      name: "paisNascto",
      type: "string",
    },
    {
      name: "paisNac",
      type: "string",
    },
  ],
  endereco: [],
  brasil: [
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
  exterior: [
    {
      name: "paisResid",
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
      name: "nmCid",
      type: "string",
    },
    {
      name: "codPostal",
      type: "string",
    },
  ],
  trabImig: [
    {
      name: "tmpResid",
      type: "number",
    },
    {
      name: "condIng",
      type: "number",
    },
  ],
  infoDeficiencia: [
    {
      name: "defFisica",
      type: "string",
    },
    {
      name: "defVisual",
      type: "string",
    },
    {
      name: "defAuditiva",
      type: "string",
    },
    {
      name: "defMental",
      type: "string",
    },
    {
      name: "defIntelectual",
      type: "string",
    },
    {
      name: "reabReadap",
      type: "string",
    },
    {
      name: "observacao",
      type: "string",
    },
  ],
  dependente: [
    {
      name: "tpDep",
      type: "number",
    },
    {
      name: "nmDep",
      type: "string",
    },
    {
      name: "dtNascto",
      type: "string",
    },
    {
      name: "cpfDep",
      type: "string",
    },
    {
      name: "depIRRF",
      type: "string",
    },
    {
      name: "depSF",
      type: "string",
    },
    {
      name: "incTrab",
      type: "string",
    },
  ],
  contato: [
    {
      name: "fonePrinc",
      type: "string",
    },
    {
      name: "emailPrinc",
      type: "string",
    },
  ],
  infoTSVInicio: [
    {
      name: "cadIni",
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
    {
      name: "nrProcTrab",
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
  fgts: [
    {
      name: "dtOpcFGTS",
      type: "string",
    },
  ],
  infoDirigenteSindical: [
    {
      name: "categOrig",
      type: "string",
    },
    {
      name: "tpInsc",
      type: "number",
    },
    {
      name: "nrInsc",
      type: "string",
    },
    {
      name: "dtAdmOrig",
      type: "string",
    },
    {
      name: "matricOrig",
      type: "string",
    },
    {
      name: "tpRegTrab",
      type: "number",
    },
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
    {
      name: "categOrig",
      type: "string",
    },
    {
      name: "cnpjCednt",
      type: "string",
    },
    {
      name: "matricCed",
      type: "string",
    },
    {
      name: "dtAdmCed",
      type: "string",
    },
    {
      name: "tpRegTrab",
      type: "number",
    },
  ],
  infoMandElet: [
    {
      name: "categOrig",
      type: "string",
    },
    {
      name: "cnpjOrig",
      type: "string",
    },
    {
      name: "matricOrig",
      type: "string",
    },
    {
      name: "dtExercOrig",
      type: "string",
    },
    {
      name: "indRemunCargo",
      type: "string",
    },
    {
      name: "tpRegTrab",
      type: "number",
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
  mudancaCPF: [
    {
      name: "cpfAnt",
      type: "string",
    },
    {
      name: "matricAnt",
      type: "string",
    },
    {
      name: "dtAltCPF",
      type: "string",
    },
    {
      name: "observacao",
      type: "string",
    },
  ],
  afastamento: [
    {
      name: "dtIniAfast",
      type: "string",
    },
    {
      name: "codMotAfast",
      type: "number",
    },
  ],
  termino: [
    {
      name: "dtTerm",
      type: "string",
    },
  ],
};
