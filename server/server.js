const express = require('express');
const app = express();
const port = 8080;
const apiRouter = require('./routes/apiRouter');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use ('/api', apiRouter)

app.listen(port, () => {
  console.log(`Express server listening at http://localhost:${port}`);
})
