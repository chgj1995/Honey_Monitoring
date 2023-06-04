const express = require('express');
const db = require('./db');
const app = express();
const port = 3000;

db.connect();

app.use(express.static(__dirname + '/pages'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/pages/content.html');
});

app.get('/get/data', async (req, res) => {
  const result = await db.getData();
  console.log(result);
  res.send(result);
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
