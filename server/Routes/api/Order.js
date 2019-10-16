const express = require('express')

const router = express.Router()

router.post('/', (req , res , next) =>{
    const { body } = req

    const orderTotalPrice = body.reduce((acc,curr) => acc + curr.totalprice , 0)
    console.log("##################################################")
    console.log('ราคารวม' , orderTotalPrice , 'รายละเอียดสินค้า' , body)
    console.log("##################################################")



})

module.exports = router