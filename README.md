# finance-controller

Este é um sistema web que ajuda você a controlar suas finanças.

## Instalação

Este sistema tem 2 diretórios, um para o front-end e outro para o back-end, e cada um deles tem um processo diferente e requisistos diferentes para serem iniciados corretamente.

No Back-End, utilizei as seguintes Stacks:

- Node.js, para criar o ambiente
- Express, para criar a api
- PostgreSQL, como Banco de dados
- Docker, para gerenciar o serviço do banco de dados
- Knex, para fazer a conexão com o banco

No Front-End, utilizei as seguintes Stacks:

- React.js, como framework
- Antd, como interface do usuários
- Axios, para fazer as operações com a API

Faremos passo a passo instalação de cada um deles.

❗**Obs**: Vale lembrar, que para conseguirmos executar o projeto da forma correta, precisamos ter instalado o [node.js](https://nodejs.org/en). Eu utilizei a versão 18.12.1 neste projeto.

### api-finance-controller

Começando pelo diretório **api-finance-controller**

#### 1º Passo

Devemos instalar o Docker, para fazer isso, você deve acessar o site do Docker e fazer o [download](https://www.docker.com/products/docker-desktop/).

```
    npm install
    npm start
```

#### 2º Passo

Instalar o PostgreSQL como imagem docker, utilizando o comando a baixo no seu terminal.

```
    docker install pg
```

#### 3º Passo

Criar o Banco de dados, conforme o esperado pela aplicação, para isso você pode utilizar o comando a baixo:

```bash
    docker run --name mydb -e POSTGRES_PASSWORD=mypassword -e POSTGRES_USER=mydb -e POSTGRES_DB=mydb -p 5432:5432 -d postgres
```

💡 Este comando está criando um banco de dados em postgres com o nome "mydb", user "mydb" e senha "mypassword", na porta 5432.

#### 4º Passo

Acessar o diretório "api-finance-controller" através do seu terminal e executar os comandos a baixo em sequência:

```
    npm install
    npm start
```

Com isso a API já estará iniciada 🥳

### frt-finance-controller

Agora vamos para o diretório **frt-finance-controller**

Este é mais simples, basta acessarmos o diretório através do seu terminal, e executar os dois comandos a baixo em sequência.

```bash
  npm install
  npm start
```

## Autores

- [@dricss](https://github.com/Dricss)
