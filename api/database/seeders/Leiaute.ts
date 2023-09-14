import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import Leiaute from "App/Models/Leiaute";
import { LeiautePrefix, LeiauteVersion } from "App/Utils/constants";

export default class extends BaseSeeder {
  public static environment = ["development", "staging", "test"];

  public async run() {
    await Leiaute.createMany([
      // TABELAS/EVENTOS INICIAIS
      {
        name: "Informações do Empregador/Contribuinte/Órgão Público",
        prefix: LeiautePrefix.S1000,
        version: LeiauteVersion.S_1_0,
        active: true,
      },
      {
        name: "Tabela de Estabelecimentos, Obras ou Unidades de Órgãos Públicos",
        prefix: LeiautePrefix.S1005,
        version: LeiauteVersion.S_1_0,
        active: true,
      },
      {
        name: "Tabela de Rubricas",
        prefix: LeiautePrefix.S1010,
        version: LeiauteVersion.S_1_0,
        active: true,
      },
      {
        name: "Tabela de Lotações Tributárias",
        prefix: LeiautePrefix.S1020,
        version: LeiauteVersion.S_1_0,
        active: true,
      },
      {
        name: "Tabela de Processos Administrativos/Judiciais",
        prefix: LeiautePrefix.S1070,
        version: LeiauteVersion.S_1_0,
        active: true,
      },

      // EVENTOS PERIÓDICOS
      {
        name: "Remuneração de trabalhador vinculado ao Regime Geral de Previdência Social",
        prefix: LeiautePrefix.S1200,
        version: LeiauteVersion.S_1_0,
        active: true,
      },
      {
        name: "Remuneração de servidor vinculado a Regime Próprio de Previdência Social – RPPS",
        prefix: LeiautePrefix.S1202,
        version: LeiauteVersion.S_1_0,
        active: true,
      },
      {
        name: "Benefícios - Entes Públicos",
        prefix: LeiautePrefix.S1207,
        version: LeiauteVersion.S_1_0,
        active: true,
      },
      {
        name: "Pagamentos de Rendimentos do Trabalho",
        prefix: LeiautePrefix.S1210,
        version: LeiauteVersion.S_1_0,
        active: true,
      },
      {
        name: "Comercialização da Produção Rural Pessoa Física",
        prefix: LeiautePrefix.S1260,
        version: LeiauteVersion.S_1_0,
        active: true,
      },
      {
        name: "Contratação de Trabalhadores Avulsos Não Portuários",
        prefix: LeiautePrefix.S1270,
        version: LeiauteVersion.S_1_0,
        active: true,
      },
      {
        name: "Informações Complementares aos Eventos Periódicos",
        prefix: LeiautePrefix.S1280,
        version: LeiauteVersion.S_1_0,
        active: true,
      },
      {
        name: "Reabertura dos Eventos Periódicos",
        prefix: LeiautePrefix.S1298,
        version: LeiauteVersion.S_1_0,
        active: true,
      },
      {
        name: "Fechamento dos Eventos Periódicos",
        prefix: LeiautePrefix.S1299,
        version: LeiauteVersion.S_1_0,
        active: true,
      },

      // EVENTOS NÃO PERIÓÐICOS
      {
        name: "Admissão de Trabalhador – Registro Preliminar",
        prefix: LeiautePrefix.S2190,
        version: LeiauteVersion.S_1_0,
        active: true,
      },
      {
        name: "Cadastramento Inicial do Vínculo e Admissão/Ingresso de Trabalhador",
        prefix: LeiautePrefix.S2200,
        version: LeiauteVersion.S_1_0,
        active: true,
      },
      {
        name: "Alteração de Dados Cadastrais do Trabalhador",
        prefix: LeiautePrefix.S2205,
        version: LeiauteVersion.S_1_0,
        active: true,
      },
      {
        name: "Alteração de Contrato de Trabalho",
        prefix: LeiautePrefix.S2206,
        version: LeiauteVersion.S_1_0,
        active: true,
      },
      {
        name: "Afastamento Temporário",
        prefix: LeiautePrefix.S2230,
        version: LeiauteVersion.S_1_0,
        active: true,
      },
      {
        name: "Cessão/Exercício em Outro Órgão",
        prefix: LeiautePrefix.S2231,
        version: LeiauteVersion.S_1_0,
        active: true,
      },
      {
        name: "Reintegração",
        prefix: LeiautePrefix.S2298,
        version: LeiauteVersion.S_1_0,
        active: true,
      },
      {
        name: "Desligamento",
        prefix: LeiautePrefix.S2299,
        version: LeiauteVersion.S_1_0,
        active: true,
      },
      {
        name: "Trabalhador Sem Vínculo de Emprego/Estatutário - Início",
        prefix: LeiautePrefix.S2300,
        version: LeiauteVersion.S_1_0,
        active: true,
      },
      {
        name: "Trabalhador Sem Vínculo de Emprego/Estatutário - Alteração Contratual",
        prefix: LeiautePrefix.S2306,
        version: LeiauteVersion.S_1_0,
        active: true,
      },
      {
        name: "Trabalhador Sem Vínculo de Emprego/Estatutário - Término",
        prefix: LeiautePrefix.S2399,
        version: LeiauteVersion.S_1_0,
        active: true,
      },
      {
        name: "Cadastro de Beneficiários – Entes Públicos",
        prefix: LeiautePrefix.S2400,
        version: LeiauteVersion.S_1_0,
        active: true,
      },
      {
        name: "Cadastro de Beneficiário - Entes Públicos - Alteração",
        prefix: LeiautePrefix.S2405,
        version: LeiauteVersion.S_1_0,
        active: true,
      },
      {
        name: "Cadastro de Benefício - Entes Públicos - Início",
        prefix: LeiautePrefix.S2410,
        version: LeiauteVersion.S_1_0,
        active: true,
      },
      {
        name: "Cadastro de Benefício - Entes Públicos - Alteração",
        prefix: LeiautePrefix.S2416,
        version: LeiauteVersion.S_1_0,
        active: true,
      },
      {
        name: "Reativação de Benefício - Entes Públicos",
        prefix: LeiautePrefix.S2418,
        version: LeiauteVersion.S_1_0,
        active: true,
      },
      {
        name: "Cadastro de Benefícios - Entes Públicos - Término",
        prefix: LeiautePrefix.S2420,
        version: LeiauteVersion.S_1_0,
        active: true,
      },
      {
        name: "Exclusão de Eventos",
        prefix: LeiautePrefix.S3000,
        version: LeiauteVersion.S_1_0,
        active: true,
      },

      {
        name: "Comunicação de Acidente de Trabalho",
        prefix: LeiautePrefix.S2210,
        version: LeiauteVersion.S_1_0,
        active: true,
      },
      {
        name: "Monitoramento da Saúde do Trabalhador",
        prefix: LeiautePrefix.S2220,
        version: LeiauteVersion.S_1_0,
        active: true,
      },
      {
        name: "Condições Ambientais do Trabalho - Fatores de Risco",
        prefix: LeiautePrefix.S2240,
        version: LeiauteVersion.S_1_0,
        active: true,
      },
      {
        name: " Processo Trabalhista",
        prefix: LeiautePrefix.S2500,
        version: LeiauteVersion.S_1_0,
        active: true,
      },
      {
        name: "Informações dos Tributos Decorrentes de Processo Trabalhista",
        prefix: LeiautePrefix.S2501,
        version: LeiauteVersion.S_1_0,
        active: true,
      },
      {
        name: "Exclusão de Eventos – Processo Trabalhista",
        prefix: LeiautePrefix.S3500,
        version: LeiauteVersion.S_1_0,
        active: true,
      },
    ]);
  }
}
