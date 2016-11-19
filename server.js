const express = require('express')
const app = express ()
const port = 8080 || process.env.PORT

app.get('/', (req,res) => {
  res.send("chicas")  
})

app.listen(8080, (err) => {
  console.log( `Servidor escuchando en el puerto : ${port}`)
})