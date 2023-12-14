const PORT = process.env.PORT ?? 8000;
const express = require("express")
const app = express()


app.listen(PORT, () => 'server is running on port ${PORT}')




 // on the carpet of servier run with npm run start but you have to be on server with cd server//