<p align="center">
 <a href="#-sobre-o-projeto">Sobre</a> •
 <a href="#-funcionalidades">Funcionalidades</a> •
 <a href="#-como-executar-a-api">Como executar</a> • 
 <a href="#-tecnologias">Tecnologias</a> • 
</p>

## 💻 Sobre o projeto

Projeto desenvolvido no **Bootcamp Web Full-Stack** da [Labenu](https://www.labenu.com.br/curso-de-programacao-web-full-stack-integral), com o intuito de criar uma API, ou seja a comunicação
entre front e back-end.

---

## ⚙️ Funcionalidades
 API disponibiliza os seguintes endpoints de conexão com o banco de dados:
  - [x] Signup - requisição de cadastro de usuários.
  - [x] Login - requisição de login de usuários.
  - [x] Create Post - requisição de criação de posts.
  - [x] Get Posts - requisição de pesquisa e retorno de posts.
  - [x] Edit Post - requisição de edição de post por Id.
  - [x] Delete Post - requisição de deleção de posts (somente admin ou quem criou o post pode deleta-lo)
  - [x] Like / Dislike Post - requisição de atulização de likes e dislikes no post.
  
---

## 🚀 Como executar a api

### Pré-requisitos
Ferramentas que devem ser instaladas para a correta execução da API:
- [Git](https://git-scm.com)
- [Node.js](https://nodejs.org/en/)
- [Postman](https://www.postman.com/downloads/) ou a sua versão WEB [PostmanWeb](https://web.postman.co)

Ferramenta para edição de códigos:
- [VSCode](https://code.visualstudio.com/)

#### 🎲 Rodando a API

Utilizar os seguintes comandos:
```bash

# Clone este repositório
$ git clone https://github.com/silvaviniciuss/labecommerce-backend

# Acesse a pasta do projeto no terminal/cmd
$ cd labook

# Para abrir o vsCode
$ code .

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# O servidor inciará na porta:3003 

```

Referencie a documentação da [API](https://documenter.getpostman.com/view/27681045/2s9Xy5LVoc).

### Requisições
```
'http://localhost:3003/'

```

#### Signup
```
http://localhost:3003/users/signup
```
Necessário informar os seguintes dados para cadastro:
```
{
    "name": "Danieli H. Ferreira",
    "email": "danieli@email.com",
    "password": "123456"
}
```

Retorna um token .
```
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImVkNDcyOTUyLTFmN2QtNDU4MC1iMTBmLWRlNGQ3MDkzOWUzNCIsIm5hbWUiOiJWaW5pY2l1cyBkYSBTaWx2YSIsInJvbGUiOiJOT1JNQUwiLCJpYXQiOjE2OTE4NjI1NDYsImV4cCI6MTY5MjQ2NzM0Nn0.EuOmBVhK7m6hvzN5aWZioW0qAJ1TcDLv75JDvL7rXZ4"
}
Funções adicionais:
    - Geração de ID automático.
    - Senha (password) Hasheada
```
#### Login
```
http://localhost:3003/users/login
```
Retorna um token:
```
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQ4MzNmM2JkLWE3MzUtNGY2NC04YTNkLTAzNDA2YzE2N2U2MyIsIm5hbWUiOiJEYW5pZWxpIEguIEZlcnJlaXJhIiwicm9sZSI6Ik5PUk1BTCIsImlhdCI6MTY5MTg2MjY0NywiZXhwIjoxNjkyNDY3NDQ3fQ.AY3pD8T0toBcRF5XXWMPyve9XEVKvG-rsrswWTBw5Og"
}
```

##### Create Post
```
http://localhost:3003/posts
```
Necessário informar o conteúdo do post:
```
{
    "content": "Primeiro Post do Labook"
}
```

Funções adicionais:
- Geração de ID automático.
- Validação de token para criação do post.

#### Get Posts
```
http://localhost:3003/posts
```
Retorna todos os posts em um Array de Obejtos [{}].
```
[
    {
        "id": "d4add77a-cd87-4682-bcd0-1ce11d7118c6",
        "content": "Primeiro Post do Labook",
        "likes": 1,
        "dislikes": 0,
        "createdAt": "12/08/2023, 15:05:26",
        "updateAt": "12/08/2023, 15:05:26",
        "creator": {
            "id": "4833f3bd-a735-4f64-8a3d-03406c167e63",
            "name": "Danieli H. Ferreira"
        }
    }
]
```
Funções adicionais:
    - Verificação de token para acesso.

```
```
#### Edit Post
```
http://localhost:3003/posts/:id
```
Nescessário informar o parametro do post (id) que desejar editar,
podendo somente alterar o conteúdo do post.

```
{
    "content": "Primeiro Post do Labook(Atualizado)"
}
```
Funções adicionais:
    - Vericação de token para acesso.
    - Data de atualização automática.

#### Delete Post
```
http://localhost:3003/posts/:id
```
Necessário informar o parametro do post (id) que desejar deletar.

Funções adicionais:
    - Verificação de token para acesso. Permitindo somente Admin ou quem criou o post excluir o mesmo.

#### Like / Dislike Post
```
http://localhost:3003/posts/:id/like
```
Necessário informar o parametro do post e passar o corpo:
- Para dar like.
```
{
    "like": true
}
```
- Para dar dislike.
```
{
    "like": false
}
```

## 🛠 Tecnologias

Ferramentas utilizadas no desenvolvimento do projeto:

-   [NodeJS](https://nodejs.org/en/) - software que permite a execução de JS fora de um navegador WEB.
-   [CORS](https://expressjs.com/en/resources/middleware/cors.html) - biblioteca que permite enviar requisições de uma página hospedada localmente.
-   [APIs & Express](https://expressjs.com/pt-br/) - framework de recursos para impletar funcionalidades em APIs.
-   [TypeScript](https://www.typescriptlang.org/) - linguagem de programação que adiciona tipagem estática ao JS.
-   [ts-node](https://github.com/TypeStrong/ts-node) - ferramenta de compilação de projetos TypeScript.
-   [SQLite](https://github.com/mapbox/node-sqlite3) - banco de dados.
-   [Knex](https://knexjs.org/guide/query-builder.html) - permite que os códigos SQL sejam mais estruturados.
-   [UUID]() - Uuid na versão 4 para geração de IDs.
-   [Env]() - Configuração de variáveis de ambiente.
-   [Json Web Token](https://jwt.io/) - Geração de tokens de acesso.
-   [Bcrypt](https://www.npmjs.com/package/bcrypt) - Senha criptografadas (hash)
