Algumas instalações importantes

> Para ambiente Linux/Ubuntu
> Caso esteja no Windows usar o Terminal Integrado WSL

## Git

No terminal executar o seguinte comando

```bash
sudo apt update
&& sudo apt upgrade
&& sudo apt install git
```

## Curl

No terminal executar o seguinte comando

```bash
sudo apt update
&& sudo apt upgrade
&& sudo apt install curl
```

## NVM

> Necessário CURL na sua máquina

No terminal executar o seguinte comando

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
&& source ~/.bashrc
&& source ~/.zshrc
```

## Node v18

> Necessário NVM na sua máquina

No terminal executar o seguinte comando

```bash
nvm install 18
```

## Yarn

> Necessário NVM na sua máquina

No terminal executar o seguinte comando

```bash
npm install --global yarn
```

## Docker

> Necessário CURL na sua máquina

No terminal executar o seguinte comando

```bash
curl -fsSL https://get.docker.com -o get-docker.sh
&& sudo sh get-docker.sh
&& sudo groupadd docker
&& sudo usermod -aG docker $USER
&& sudo reboot
```

## Banco de Dados

> Necessário navegar para o pacote API
> Os passos devem ser executados no pacote API

- Criar um novo arquivo chamado `.env`
- Copiar os dados de `.env.example`
- Colar os dados copiados em `.env`
- No terminal executar o seguinte comando

```bash
docker compose up -d
node ace migration:run
node ace db:seed

```

## API

> No pacote API executar

```bash
yarn dev
```

## WEB

> Nno pacote Web executar

```bash
yarn dev
```
