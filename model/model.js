const mysql = require('mysql')

class DBConnect {
  constructor(settings) {
    const { host, user, password, database } = settings
    this.test = 'wew'
    this.connection = mysql.createConnection({ host, user, password, database })
  }

  tableSerialize({ table_name, auto_id, columns }) {
    const tableColumns = columns.map(column => `${column.name.toLowerCase()} ${column.type.toUpperCase()}(${column.size})`)
    const id = auto_id ? 'id INT PRIMARY KEY AUTO_INCREMENT NOT NULL, ' : ''
    return `CREATE TABLE ${table_name} (${id}${tableColumns.join(', ')});`
  }

  wrapConnection(connection, callback) {
    connection.connect()
    callback()
    connection.end()
  }

  createTable(data) {
    const { connection, wrapConnection, tableSerialize } = this
    wrapConnection(connection, () => connection.query(tableSerialize(data)))
  }

  createTables(data_array) {
    return data_array.map(data => createTable(data))
  }
}

initAppTables = (model) => {
  model.createTables([
    {

    },

  ])
}

module.exports = { DBConnect, initAppTables }
