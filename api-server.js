const { DBConnect} = require('./model/model')
const { initAppTables } = require('./model/tables')

const express = require('express')
const app = express()

const model = new DBConnect({
  database: 'story_time',
  password: '$gaia52396',
  host: 'localhost',
  user: 'root',
})

initAppTables(model)

// ADD CORS TO HEADERS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.listen(8080, () => console.log("Listening to port 8080"))
