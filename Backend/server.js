const express = require('express');
const app = express();
const port = 3000;

app.get('/ping', (req, res) => {
  res.send('pong');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
