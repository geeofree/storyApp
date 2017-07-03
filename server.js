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

app.get("/user", (req, res) => {
  model.selectAll('User', (data, err) => res.send(data))
})

app.get("/user/:id", (req, res) => {
  const { id } = req.params
  model.select('User', `UserID=${id}`, (data, err) => res.send(data))
})

app.listen(PORT)
