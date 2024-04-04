import { create } from 'xmlbuilder2';

const data = {
    nome: "Lucas",
    Idade: 19
};

const xml = create({ version: '1.0' })
    .ele('root')
    .ele('data')
    .ele('item', data.nome)
    .up()
    .ele('item2', data.Idade)
    .end({ prettyPrint: true });

console.log(xml);