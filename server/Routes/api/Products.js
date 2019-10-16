const express = require('express')
const router = express.Router()


const database = [
    { name : "HTML COURSE " , img: "https://5.imimg.com/data5/TI/NN/GLADMIN-54744791/html-and-html5-500x500.png" , price:150 , id : 1},
    { name : "CSS COURSE " , img: "https://i0.wp.com/sidneyandfriends.com/wp-content/uploads/2016/03/css-logo.png?fit=500%2C500&ssl=1" , price:180 , id : 2},
    { name : "NODEJS COURSE ", img:"https://webdesignledger.com/wp-content/uploads/2015/09/00-featured-nodejs.jpg" , price:200 , id : 3}
]

router.get('/' , (req , res , next ) =>{
    setTimeout(() =>{
        res.json(database)
    }, 1000)
})

module.exports = router