import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import Leiaute from "App/Models/Leiaute";
import Version from "App/Models/Version";
import { LeiautePrefix, LeiauteVersion } from "App/Utils/constants";

export default class extends BaseSeeder {
  public static environment = ["development", "staging", "test"];

  public async run() {
    const version = await Version.findBy("prefix", LeiauteVersion.S_1_0);

    if (!version) return;

    await Leiaute.createMany([
      // TABELAS/EVENTOS INICIAIS
      {
        name: "Informações do Empregador/Contribuinte/Órgão Público",
        prefix: LeiautePrefix.S1000,
        active: true,
        version_id: version.id,
      },
      {
        name: "Tabela de Estabelecimentos, Obras ou Unidades de Órgãos Públicos",
        prefix: LeiautePrefix.S1005,
        active: true,
        version_id: version.id,
      },
      {
        name: "Tabela de Rubricas",
        prefix: LeiautePrefix.S1010,
        active: true,
        version_id: version.id,
      },
      {
        name: "Tabela de Lotações Tributárias",
        prefix: LeiautePrefix.S1020,
        active: true,
        version_id: version.id,
      },
      {
        name: "Tabela de Processos Administrativos/Judiciais",
        prefix: LeiautePrefix.S1070,
        active: true,
        version_id: version.id,
      },

      // EVENTOS PERIÓDICOS
      {
        name: "Remuneração de trabalhador vinculado ao Regime Geral de Previdência Social",
        prefix: LeiautePrefix.S1200,
        active: true,
        version_id: version.id,
      },
      {
        name: "Remuneração de servidor vinculado a Regime Próprio de Previdência Social – RPPS",
        prefix: LeiautePrefix.S1202,
        active: true,
        version_id: version.id,
      },
      {
        name: "Benefícios - Entes Públicos",
        prefix: LeiautePrefix.S1207,
        active: true,
        version_id: version.id,
      },
      {
        name: "Pagamentos de Rendimentos do Trabalho",
        prefix: LeiautePrefix.S1210,
        active: true,
        version_id: version.id,
      },
      {
        name: "Comercialização da Produção Rural Pessoa Física",
        prefix: LeiautePrefix.S1260,
        active: true,
        version_id: version.id,
      },
      {
        name: "Contratação de Trabalhadores Avulsos Não Portuários",
        prefix: LeiautePrefix.S1270,
        active: true,
        version_id: version.id,
      },
      {
        name: "Informações Complementares aos Eventos Periódicos",
        prefix: LeiautePrefix.S1280,
        active: true,
        version_id: version.id,
      },
      {
        name: "Reabertura dos Eventos Periódicos",
        prefix: LeiautePrefix.S1298,
        active: true,
        version_id: version.id,
      },
      {
        name: "Fechamento dos Eventos Periódicos",
        prefix: LeiautePrefix.S1299,
        active: true,
        version_id: version.id,
      },

      // EVENTOS NÃO PERIÓÐICOS
      {
        name: "Admissão de Trabalhador – Registro Preliminar",
        prefix: LeiautePrefix.S2190,
        active: true,
        version_id: version.id,
      },
      {
        name: "Cadastramento Inicial do Vínculo e Admissão/Ingresso de Trabalhador",
        prefix: LeiautePrefix.S2200,
        active: true,
        version_id: version.id,
      },
      {
        name: "Alteração de Dados Cadastrais do Trabalhador",
        prefix: LeiautePrefix.S2205,
        active: true,
        version_id: version.id,
      },
      {
        name: "Alteração de Contrato de Trabalho",
        prefix: LeiautePrefix.S2206,
        active: true,
        version_id: version.id,
      },
      {
        name: "Afastamento Temporário",
        prefix: LeiautePrefix.S2230,
        active: true,
        version_id: version.id,
      },
      {
        name: "Cessão/Exercício em Outro Órgão",
        prefix: LeiautePrefix.S2231,
        active: true,
        version_id: version.id,
      },
      {
        name: "Reintegração",
        prefix: LeiautePrefix.S2298,
        active: true,
        version_id: version.id,
      },
      {
        name: "Desligamento",
        prefix: LeiautePrefix.S2299,
        active: true,
        version_id: version.id,
      },
      {
        name: "Trabalhador Sem Vínculo de Emprego/Estatutário - Início",
        prefix: LeiautePrefix.S2300,
        active: true,
        version_id: version.id,
      },
      {
        name: "Trabalhador Sem Vínculo de Emprego/Estatutário - Alteração Contratual",
        prefix: LeiautePrefix.S2306,
        active: true,
        version_id: version.id,
      },
      {
        name: "Trabalhador Sem Vínculo de Emprego/Estatutário - Término",
        prefix: LeiautePrefix.S2399,
        active: true,
        version_id: version.id,
      },
      {
        name: "Cadastro de Beneficiários – Entes Públicos",
        prefix: LeiautePrefix.S2400,
        // active: true,
        version_id: version.id,
      },
      {
        name: "Cadastro de Beneficiário - Entes Públicos - Alteração",
        prefix: LeiautePrefix.S2405,
        // active: true,
        version_id: version.id,
      },
      {
        name: "Cadastro de Benefício - Entes Públicos - Início",
        prefix: LeiautePrefix.S2410,
        // active: true,
        version_id: version.id,
      },
      {
        name: "Cadastro de Benefício - Entes Públicos - Alteração",
        prefix: LeiautePrefix.S2416,
        // active: true,
        version_id: version.id,
      },
      {
        name: "Reativação de Benefício - Entes Públicos",
        prefix: LeiautePrefix.S2418,
        // active: true,
        version_id: version.id,
      },
      {
        name: "Cadastro de Benefícios - Entes Públicos - Término",
        prefix: LeiautePrefix.S2420,
        // active: true,
        version_id: version.id,
      },
      {
        name: "Exclusão de Eventos",
        prefix: LeiautePrefix.S3000,
        // active: true,
        version_id: version.id,
      },

      {
        name: "Comunicação de Acidente de Trabalho",
        prefix: LeiautePrefix.S2210,
        active: true,
        version_id: version.id,
      },
      {
        name: "Monitoramento da Saúde do Trabalhador",
        prefix: LeiautePrefix.S2220,
        active: true,
        version_id: version.id,
      },
      {
        name: "Condições Ambientais do Trabalho - Fatores de Risco",
        prefix: LeiautePrefix.S2240,
        active: true,
        version_id: version.id,
      },
      {
        name: " Processo Trabalhista",
        prefix: LeiautePrefix.S2500,
        active: true,
        version_id: version.id,
      },
      {
        name: "Informações dos Tributos Decorrentes de Processo Trabalhista",
        prefix: LeiautePrefix.S2501,
        active: true,
        version_id: version.id,
      },
      {
        name: "Exclusão de Eventos – Processo Trabalhista",
        prefix: LeiautePrefix.S3500,
        version_id: version.id,
        active: true,
      },
    ]);
  }
}
