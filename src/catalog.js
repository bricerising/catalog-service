var express = require('express');
var app = express();
var requestify = require('requestify');

PORT = process.env.PORT ? process.env.PORT : 3001;
PRODUCTS_SERVICE_URL = process.env.PRODUCTS_SERVICE_URL ? process.env.PRODUCTS_SERVICE_URL : 'http://localhost:3000';

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
});

app.get('/', function (req, res) {
  console.log(PRODUCTS_SERVICE_URL);
  requestify.get(PRODUCTS_SERVICE_URL).then((response) => {
    res.send(response.getBody());
  }).catch((error) => {
    console.error(error);
  });
});
