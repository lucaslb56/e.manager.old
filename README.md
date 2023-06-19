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

### Usando NGINX

> Necessário ter efetuado build nos pacotes WEB e API

Para configurar um servidor Nginx para hospedar uma API Node.js e uma interface React criada com Vite, você pode seguir os seguintes passos:

1. Certifique-se de que o Node.js e o Nginx estejam instalados no servidor Ubuntu, conforme mencionado anteriormente.

2. Configure a API Node.js:

   - Certifique-se de que a API Node.js esteja funcionando corretamente em uma determinada porta, como `http://localhost:3000`.

3. Configure a interface React com Vite:

   - Certifique-se de que a interface React tenha sido construída usando o comando `npm run build` e que os arquivos otimizados estejam disponíveis em uma determinada pasta, como `/caminho/do/diretorio/dist`.

4. Configure o Nginx para redirecionar as solicitações para a API Node.js e servir a interface React:

   - Abra o arquivo de configuração padrão do Nginx:

     ```
     sudo nano /etc/nginx/sites-available/default
     ```

   - Remova todo o conteúdo e adicione o seguinte bloco de configuração:

     ```
     server {
         listen 80;
         server_name seu-dominio.com;

         location /api {
             proxy_pass http://localhost:3000;  # Redireciona as solicitações para a API Node.js
             proxy_set_header Host $host;
             proxy_set_header X-Real-IP $remote_addr;
         }

         location / {
             root /caminho/do/diretorio/dist;  # Serve os arquivos da interface React
             index index.html;
             try_files $uri $uri/ /index.html;
         }
     }
     ```

     Substitua "seu-dominio.com" pelo seu domínio ou endereço IP, "/api" pela rota da sua API Node.js e "/caminho/do/diretorio/dist" pelo caminho completo do diretório "dist" da sua interface React.

   - Salve o arquivo e saia do editor.

   - Reinicie o serviço do Nginx para aplicar as alterações:

     ```
     sudo service nginx restart
     ```

5. Após configurar o servidor Nginx, você poderá acessar a API Node.js através da rota `/api` e a interface React através da rota principal.

   Por exemplo, se o seu domínio for `seu-dominio.com`, a API Node.js estará disponível em `seu-dominio.com/api` e a interface React será servida em `seu-dominio.com`.

Lembre-se de substituir os valores relevantes, como o domínio, a porta da API Node.js e o caminho do diretório da interface React, de acordo com a sua configuração.
