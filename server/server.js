const express = require('express');
const app = express();
const port = 8080;

app.get ('/appname', (req, res) => {
  res.send('BareBones');
})

app.listen(port, () => {
  console.log(`Express server listening at http://localhost:${port}`);
})
