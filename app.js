const express = require('express');
const app = express();
const port = 3000;

const fatorialRouter = require('./routes/fatorial');

app.use('/api/fatorial', fatorialRouter);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
