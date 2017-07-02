const mysql = require('mysql')


class DBModel {
  constructor(settings) {
    const { host, user, password, database } = settings
    this.connection = mysql.createConnection({ host, user, password, database })
  }

  tableSerialize({ table_name, primary_key, foreign_key, columns }) {
    let id = '', foreignId = ''

    if(primary_key) {
      id = `${primary_key} INT PRIMARY KEY AUTO_INCREMENT NOT NULL, `
    }

    if(foreign_key) {
      const { table_ref, table_ref_key } = foreign_key
      foreignId = `${table_ref_key}_FK INT, FOREIGN KEY (${table_ref_key}_FK) REFERENCES ${table_ref}(${table_ref_key}), `
    }

    const tableColumns = columns.map(column => {
      const name = column.name.toLowerCase()
      const type = column.type.toUpperCase()
      const size = column.size ? `(${column.size})` : ''
      return `${name} ${type}${size}`
    }).join(', ')

    return `CREATE TABLE ${table_name} (${id}${foreignId}${tableColumns});`
  }

  createTable(data) {
    const { connection, tableSerialize } = this
    connection.query(tableSerialize(data))
  }

  createTables(data_array) {
    const { createTable } = this
    return data_array.map(data => createTable(data))
  }

  select(table_name, condition, callback) {
    const { connection } = this
    connection.query(`SELECT * FROM \`${table_name}\` WHERE ${condition}`, (err, results) => callback(results, err))
  }

  selectAll(table_name, callback) {
    const { connection } = this
    connection.query(`SELECT * FROM \`${table_name}\``, (err, results) => callback(results, err))
  }
}


module.exports = { DBModel }
