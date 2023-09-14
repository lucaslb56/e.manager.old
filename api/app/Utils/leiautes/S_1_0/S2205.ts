import { LeiauteExtractType } from "App/Dtos/Leiaute";

export const S2205: LeiauteExtractType = {
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
  ideTrabalhador: [
    {
      name: "cpfTrab",
      type: "string",
    },
  ],
  alteracao: [
    {
      name: "dtAlteracao",
      type: "string",
    },
  ],
  dadosTrabalhador: [
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
      type: "string",
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
};
