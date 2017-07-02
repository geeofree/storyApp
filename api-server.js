const { DBConnect} = require('./model/model')
const { initAppTables } = require('./model/table')

const express = require('express')
const app = express()

// MAKE AN INSTANCE OF A DATABASE CONNECTION
const model = new DBConnect({
  host: 'localhost',
  user: 'root',
  password: '$gaia52396',
  database: 'story_time'
})

// INITIALIZE THE APP'S TABLES
initAppTables(model)

// ADD CORS TO HEADERS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.listen(8080, ()=> console.log("Listening to port 8080"))
