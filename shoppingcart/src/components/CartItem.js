import React , {useContext} from 'react'
import { Row, Col , Button } from 'antd';

import { CartContext } from '../Context/CartContext'

const CartItem = (props) => {

    const [cart , setCart] = useContext(CartContext)

    const RemoveItem = () =>{
        console.log(`นำสินค้า ${props.name} ออกจากตะกร้า`)
        const RemoveIndex = cart.map(cart =>  cart.id ).indexOf(props.id)
        console.log("IndexOf" , RemoveIndex)
        cart.splice(RemoveIndex , 1)
        setCart(curr =>[...curr])
    }

    return (
        <div>
            <Row className="">
                <Col className="DeleteButton" span={3}><Button type="danger" onClick={RemoveItem}>X</Button></Col>
                <Col span={5}><img className="productImg" src={props.img} /></Col>
                <Col span={7}> {props.id} {props.name}</Col>
                <Col span={3}>{props.price}</Col>
                <Col span={3}>{props.count}</Col>
                <Col span={3}>{props.totalprice}</Col>
            </Row>
          <hr/>
        </div>
    )
}

export default CartItem
