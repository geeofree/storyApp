const { initAppTables } = require('./tables')
const { DBModel } = require('./model')
const prompt = require("prompt")


function DBConnect(portNumber) {
  let model;

  const schema = {
    properties: {
      db_name: {
        message: "MySQL Database name",
        required: true
      },
      username: {
        message: "MySQL username",
        required: true
      },
      password: {
        message: "MySQL password",
        hidden: true,
        replace: '*',
        required: true
      }
    }
  }

  prompt.start()
  prompt.get(schema, (err, res) => {
    model = new DBModel({
      host: 'localhost',
      database: res.db_name,
      user: res.username,
      password: res.password
    })

    initAppTables(model)
    console.log(`Connected. Server is now listening to PORT ${portNumber}`)
  })

  return model
}

module.exports = { DBConnect }
