# Projeto de autenticação

Goal:
- create user (signup) 
- list user
- login (signin)
- log out (sign out)
- criptografar dados sensíveis
- autenticação com token

Tecnologies:
- Jwt Token
- JavaScript (ES6)
- TypeOrm
- Docker

Steps to run this project:

1. Run `npm i` command
2. Criar arquivo .env na raiz e no conteúdo colocar as variavéis de ambiente
  - PORT
  - POSTGRES_TYPE
  - POSTGRES_HOST
  - POSTGRES_PORT
  - POSTGRES_USER
  - POSTGRES_PASSWORD
  - POSTGRES_DB
3. Executar `docker-compose up`
4. Run `npm start` command
