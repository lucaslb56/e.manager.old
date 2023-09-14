import { LeiauteExtractType } from "App/Dtos/Leiaute";

export const S2200: LeiauteExtractType = {
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
      name: "infoCota",
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
      name: "sexoDep",
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
  vinculo: [
    {
      name: "matricula",
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
    {
      name: "cadIni",
      type: "string",
    },
  ],
  infoRegimeTrab: [],
  infoCeletista: [
    {
      name: "dtAdm",
      type: "string",
    },
    {
      name: "tpAdmissao",
      type: "number",
    },
    {
      name: "indAdmissao",
      type: "number",
    },
    {
      name: "nrProcTrab",
      type: "number",
    },
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
  FGTS: [
    {
      name: "dtOpcFGTS",
      type: "string",
    },
  ],
  trabTemporario: [
    {
      name: "hipLeg",
      type: "number",
    },
    {
      name: "justContr",
      type: "string",
    },
  ],
  ideEstabVinc: [
    {
      name: "tpInsc",
      type: "number",
    },
    {
      name: "nrInsc",
      type: "string",
    },
  ],
  ideTrabSubstituido: [
    {
      name: "cpfTrabSubst",
      type: "string",
    },
  ],
  aprend: [
    {
      name: "tpInsc",
      type: "number",
    },
    {
      name: "nrInsc",
      type: "string",
    },
  ],
  infoEstatutario: [
    {
      name: "tpProv",
      type: "number",
    },
    {
      name: "dtExercicio",
      type: "string",
    },
    {
      name: "tpPlanRP",
      type: "number",
    },
    {
      name: "indTetoRGPS",
      type: "string",
    },
    {
      name: "indAbonoPerm",
      type: "string",
    },
    {
      name: "dtIniAbono",
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
      name: "dtIngrCargo",
      type: "string",
    },
    {
      name: "nmFuncao",
      type: "string",
    },
    {
      name: "CBOFuncao",
      type: "number",
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
  localTempDom: [],
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
    {
      name: "observacao",
      type: "string",
    },
  ],
  transfDom: [
    {
      name: "cpfSubstituido",
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
  desligamento: [
    {
      name: "dtDeslig",
      type: "string",
    },
  ],
  cessao: [
    {
      name: "dtIniCessao",
      type: "string",
    },
  ],
};
