const express = require('express')
const router = express.Router()


const database = [
    { name : "red tshirt " , img: "https://4.imimg.com/data4/MS/GX/MY-9185795/mens-polo-red-t-shirt-500x500.jpg" , price:150 , id : 1},
    { name : "yellow tshirt " , img: "http://cdn.shopify.com/s/files/1/0232/3963/products/plain-yellow-tshirt_grande.jpg?v=1449214453" , price:180 , id : 2},
    { name : "green tshirt ", img:"https://4.imimg.com/data4/AE/MC/MY-1044551/plain-t-shirt-500x500.jpg" , price:200 , id : 3}
]

router.get('/' , (req , res , next ) =>{
    setTimeout(() =>{
        res.json(database)
    }, 1000)
})

module.exports = router