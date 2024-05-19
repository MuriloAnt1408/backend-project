const express = require('express')
const mongoose = require('mongoose')



const app = express()
const port = 3000
mongoose.connect('mongodb+srv://antunesmurilo24:<xQXygRwFYNqM7Xvr>@projectbackend.yiw1hpl.mongodb.net/?retryWrites=true&w=majority&appName=ProjectBackend')

const Cadastro = mongoose.model('Cadastro', {
  nome: String,
  sexo: String,
  data_nascimento: String,
  estado_civil: String,
  email: String,
  empresa: String,
})


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post("/", async (req, res) => {
  const cadastro = new Cadastro({
    nome: req.body.nome,
    sexo: req.body.sexo,
    data_nascimento: req.body.data_nascimento,
    estado_civil: req.body.estado_civil,
    email: req.body.email,
    empresa: req.body.empresa,
}) 
  await cadastro.save()
  res.send(cadastro)

})

app.listen(port, () => {
  console.log(`App Running`)
})