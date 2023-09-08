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
      },
      {
        name: "Tabela de Estabelecimentos, Obras ou Unidades de Órgãos Públicos",
        prefix: LeiautePrefix.S1005,
        version: LeiauteVersion.S_1_0,
      },
      {
        name: "Tabela de Rubricas",
        prefix: LeiautePrefix.S1010,
        version: LeiauteVersion.S_1_0,
      },
      {
        name: "Tabela de Lotações Tributárias",
        prefix: LeiautePrefix.S1020,
        version: LeiauteVersion.S_1_0,
      },
      {
        name: "Tabela de Processos Administrativos/Judiciais",
        prefix: LeiautePrefix.S1070,
        version: LeiauteVersion.S_1_0,
      },

      // EVENTOS PERIÓDICOS
      {
        name: "Remuneração de trabalhador vinculado ao Regime Geral de Previdência Social",
        prefix: LeiautePrefix.S1200,
        version: LeiauteVersion.S_1_0,
      },
      {
        name: "Remuneração de servidor vinculado a Regime Próprio de Previdência Social – RPPS",
        prefix: LeiautePrefix.S1202,
        version: LeiauteVersion.S_1_0,
      },
      {
        name: "Benefícios - Entes Públicos",
        prefix: LeiautePrefix.S1207,
        version: LeiauteVersion.S_1_0,
      },
      {
        name: "Pagamentos de Rendimentos do Trabalho",
        prefix: LeiautePrefix.S1210,
        version: LeiauteVersion.S_1_0,
      },
      {
        name: "Comercialização da Produção Rural Pessoa Física",
        prefix: LeiautePrefix.S1260,
        version: LeiauteVersion.S_1_0,
      },
      {
        name: "Contratação de Trabalhadores Avulsos Não Portuários",
        prefix: LeiautePrefix.S1270,
        version: LeiauteVersion.S_1_0,
      },
      {
        name: "Informações Complementares aos Eventos Periódicos",
        prefix: LeiautePrefix.S1280,
        version: LeiauteVersion.S_1_0,
      },
      {
        name: "Reabertura dos Eventos Periódicos",
        prefix: LeiautePrefix.S1298,
        version: LeiauteVersion.S_1_0,
      },
      {
        name: "Fechamento dos Eventos Periódicos",
        prefix: LeiautePrefix.S1299,
        version: LeiauteVersion.S_1_0,
      },
    ]);
  }
}
