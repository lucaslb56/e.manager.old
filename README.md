# EManager

Seu gerenciador de templates e dados e-social

### Dependências

> Necessário para executar o sistema e os pacotes

- [Docker Engine](https://docs.docker.com/engine/install/)
- [NodeJS v18](https://nodejs.org/en)
- [Yarn](https://yarnpkg.com/getting-started/install)

### Iniciando Base de Dados

> Necessário ter Docker Engine instalado

- Acessar o pacote `API` com um terminal
- Criar um arquivo `.env` na raiz do pacote
- Copiar o conteúdo de `API/.env.example` e colar no novo arquivo criado `.env`
- Executar `docker compose up -d` para configurar a instância da base de dados
- Executar `node ace migration:run` para criar as migrations/tabelas
- Executar `node ace db:seed` para criar os dados necessários de autenticação

### Executando a API (Desenvolvimento)

> Necessário NodeJS v18 e Yarn

- Acessar o pacote `API` com um terminal
- Ter criado o arquivo `.env` no pacote `API`
- Ter copiado o conteúdo de `API/.env.example` e ter colado no novo arquivo criado `.env`
- Ter configurado o instância do banco de dados
- Executar `yarn install` para instalar as dependências
- Executar `yarn dev` para executar em modo de desenvolvimento
- Api estará disponível em `http://localhost:3000/development`

### Executando a API (Produção)

> Necessário NodeJS v18 e Yarn

- Acessar o pacote `API` com um terminal
- Ter criado o arquivo `.env` no pacote `API`
- Ter copiado o conteúdo de `API/.env.example` e ter colado no novo arquivo criado `.env`
- Efetuar a mudança de `PREFIX=development` em `API/.env` para `PREFIX=v1`
- Ter configurado o instância do banco de dados
- Executar `yarn install` para instalar as dependências
- Executar `yarn build` para executar montar o build para produção
- Executar `yarn start` para executar a aplicação
- Api estará disponível em `http://localhost:3000/v1`

### Executando a Interface (Desenvolvimento)

> Necessário que a API esteja em execução

- Acessar o pacote `WEB` com um terminal
- Ter criado o arquivo `.env` no pacote `WEB`
- Ter copiado o conteúdo de `WEB/.env.example` e ter colado no novo arquivo criado `.env`
- Executar `yarn install` para instalar as dependências
- Executar `yarn dev` para executar a aplicação
- Api estará disponível em `http://localhost:5173/`
