const { initAppTables } = require('./tables')
const { DBModel } = require('./model')
const prompt = require("prompt-sync")()


function DBConnect(portNumber) {
  const database = prompt("Name of database to use: ")
  const user     = prompt("MySQL Username: ")
  const password = prompt("MySQL Password: ", { echo: '*' })

  const model = new DBModel({
    host: 'localhost',
    database,
    password,
    user
  })

  model.connection.connect()
  console.log(`Connected. Server Listening to PORT ${portNumber}`)
  initAppTables(model)
  return model
}

module.exports = { DBConnect }
