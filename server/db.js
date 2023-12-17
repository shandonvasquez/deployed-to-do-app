const Pool = require('pg').Pool
require('dotenv').config()

const pool = new Pool({
  user: process.env.USERNAME,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  port: process.env.DBPORT,
  database: 'todoapp'
})
s
module.exports = pool

This has to be the best appt we are working on it