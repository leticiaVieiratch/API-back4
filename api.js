const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Libera acesso de qualquer frontend (necessário para o front consumir a API)
app.use(cors());

// Rota raiz - só para checar se a API está no ar
app.get('/', (req, res) => {
  res.json({
    mensagem: 'API de Data e Hora está funcionando!',
    endpoint: '/data-hora'
  });
});

// Rota de consulta de data e hora
app.get('/data-hora', (req, res) => {
  const agora = new Date();

  res.json({
    dataHoraCompleta: agora.toISOString(),
    data: agora.toLocaleDateString('pt-BR', { timeZone: 'America/Sao_Paulo' }),
    hora: agora.toLocaleTimeString('pt-BR', { timeZone: 'America/Sao_Paulo' }),
    timestamp: agora.getTime()
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});