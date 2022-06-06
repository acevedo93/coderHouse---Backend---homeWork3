const express = require('express')
const app = express()
const port = 3000
const productos = require('./products')

app.get('/productos', (req, res) => {
    res.json({productos}) 
})

app.get('/productoRandom', (req, res) => {
    const productsLength = productos.length
    const randomId = Math.floor(Math.random() * productsLength)
    res.json({producto: productos[randomId]})
})

app.listen(port, () => {
    console.log(`server running on ${port}`)
})

