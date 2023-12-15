const Pool = require('pg').Pool
require('dotenv').config()

const pool = new Pool({ 
    user: 'postgresql',
    password: 'Dance4me',
    host: 'localhost',
    port: 5434,
    database: 'todoapp'
})

module.exports = pool;
