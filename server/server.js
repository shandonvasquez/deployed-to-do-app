const PORT = process.env.PORT ?? 8000;
const express = require("express")
const app = express()

//get all todos
app.get('/todos', (req, res) => {
    try{
//await
    }catch(error){
        console.log(error)
    

    }
})

app.listen(PORT, () => console.log (`Server is running on port ${PORT}`))




 // on the carpet of servier run with npm run start but you have to be on server with cd server//