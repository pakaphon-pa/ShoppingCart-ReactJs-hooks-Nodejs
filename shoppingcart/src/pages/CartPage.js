import React , {useContext} from 'react'

import { Row, Col , Button } from 'antd';

import {CartContext} from '../Context/CartContext'

import Cart from '../components/Cart'
import CartItem from '../components/CartItem'
import PageTitle from '../components/PageTitle';

const CartPage = () => {
    const [cart , setCart] = useContext(CartContext)
    const totalPrice = cart.reduce((acc,curr) => acc + curr.totalprice , 0)

    const SaveToServer = () =>{
      console.log(cart)
      fetch('http://localhost:1344/order', {
        method: 'POST',
        body:JSON.stringify(cart),
        headers:{"Content-Type":"application/json"}
      })
    }

    return (
      
        <div>
          <PageTitle title="ตะกร้าสินค้า" />
          <Cart cartLength={cart.length} totalprice={totalPrice}/><br/>
          <Row className="">
            <Col span={3}></Col>
            <Col span={5}><h3>สินค้า</h3></Col>
            <Col span={7}></Col>
            <Col span={3}>ราคา</Col>
            <Col span={3}>จำนวน</Col>
            <Col span={3}>ราคารวม</Col>
          </Row>
          <hr/>
          {
            cart.map(cart =>(
              <CartItem key={cart.id} id={cart.id} img={cart.img} name={cart.name} count={cart.count} price={cart.price} totalprice={cart.totalprice} />
            ))
          }
          <Button onClick={SaveToServer} type="primary">ส่งไปเซิฟเวอร์</Button>
        </div>
    )
}

export default CartPage
