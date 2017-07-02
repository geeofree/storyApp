const express = require('express')
const app     = express()
const PORT    = 8080

const { DBConnect } = require('./model/connection')
const model = DBConnect(PORT)

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.listen(PORT)
