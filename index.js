require('dotenv').config()

const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter',(req,res)=>{
    res.send("vanshu")
})
app.get('/login',(req,res)=>{
    res.send('<h1>Please login on chai aur code</h1>')
})
app.get('/chai',(req,res)=>{
    res.send("<h2>mast CHAI</h2>")
})
app.get('/old',(req,res)=>{
  res.send("it was a old comment")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
