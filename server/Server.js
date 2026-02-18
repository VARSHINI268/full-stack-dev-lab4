const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello! Your Express server is running');
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
