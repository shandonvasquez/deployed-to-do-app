const PORT = process.env.PORT ?? 8000;
const express = require("express")
const cors = require("cors")
const app = express()
const pool = require('./db')    
//get all todos
app.use(cors())
app.get('/todos/:userEmail', async (req, res) => {
    const  {userEmail}  = req.params
    try {
      const todos = await pool.query('SELECT * FROM todos WHERE user_email = $1', [userEmail])
      res.json(todos.rows)
    } catch (err) {
      console.error(err)
    }
  })

app.listen(PORT, () => console.log (`Server is running on port ${PORT}`))




 // on the carpet of servier run with npm run start but you have to be on server with cd server//