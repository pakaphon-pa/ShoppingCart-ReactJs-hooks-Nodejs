import React from 'react'


const Cart = (props) => {
    return (
        <div>
            <span>จำนวน :  {props.cartLength} ชิ้น </span>{' '}
            <span>ราคารวมทั้งหมด : {props.totalprice}</span>
        </div>
    )
}

export default Cart
