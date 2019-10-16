const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()

app.get('/' , (req , res) => {
    res.send('ShoppingCart RESTful API Running')
})

app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use(cors())

app.use('/products' , require('./Routes/api/Products'))
app.use('/order' , require('./Routes/api/Order'))

const port = process.env.PORT
app.listen(port , () => console.log(`Server ShoppingCart Running on ${port}`))



