import { LeiauteExtractType } from "App/Dtos/Leiaute";

export const S1000: LeiauteExtractType = {
  ideEvento: [
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
  infoEmpregador: [],
  inclusao: [],
  idePeriodo: [
    {
      name: "iniValid",
      type: "string",
    },
    {
      name: "fimValid",
      type: "string",
    },
  ],
  infoCadastro: [
    {
      name: "classTrib",
      type: "number",
    },
    {
      name: "indCoop",
      type: "number",
    },
    {
      name: "indConstr",
      type: "number",
    },
    {
      name: "indDesFolha",
      type: "number",
    },
    {
      name: "indOpcCP",
      type: "number",
    },
    {
      name: "indPorte",
      type: "string",
    },
    {
      name: "indOptRegEletron",
      type: "number",
    },
    {
      name: "cnpjEFR",
      type: "string",
    },
    {
      name: "dtTrans11096",
      type: "string",
    },
  ],
  dadosIsencao: [
    {
      name: "ideMinLei",
      type: "string",
    },
    {
      name: "nrCertif",
      type: "number",
    },
    {
      name: "dtEmisCertif",
      type: "string",
    },
    {
      name: "dtVencCertif",
      type: "string",
    },
    {
      name: "nrProtRenov",
      type: "number",
    },
    {
      name: "dtProtRenov",
      type: "string",
    },
    {
      name: "dtDou",
      type: "string",
    },
    {
      name: "pagDou",
      type: "string",
    },
  ],
  infoOrgInternacional: [
    {
      name: "indAcordoIsenMulta",
      type: "number",
    },
  ],
  alteracao: [],
  novaValidade: [],
  exclusao: [],
};
