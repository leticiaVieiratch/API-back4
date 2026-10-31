# API-back4

Backend do projeto que retorna a data e hora atual em JSON.

## Descrição

Este projeto cria uma API em Node.js com Express para fornecer a data e hora atual do servidor.

## Tecnologias

- Node.js
- Express
- CORS

## Como rodar localmente

1. Abra o terminal na pasta do projeto.
2. Instale as dependências:

```bash
npm install
```

3. Inicie a API:

```bash
npm start
```

4. A API ficará disponível em:

```bash
http://localhost:3000
```

## Endpoints

### GET /

Retorna uma mensagem de status da API.

### GET /data-hora

Retorna a data e hora atual em JSON:

```json
{
  "dataHoraCompleta": "2026-09-18T20:40:30.014Z",
  "data": "18/09/2026",
  "hora": "17:40:30",
  "timestamp": 1789764030014
}
```

## Deploy no Render

1. Acesse https://render.com
2. Crie um novo Web Service
3. Conecte este repositório GitHub
4. Use:
   - Build Command: `npm install`
   - Start Command: `npm start`
5. Aguarde o deploy e copie a URL pública gerada

## URL pública

```bash
https://api-back4.onrender.com/
```

## Repositórios

- Frontend: https://github.com/leticiaVieiratch/API-front4
- Backend: https://github.com/leticiaVieiratch/API-back4
