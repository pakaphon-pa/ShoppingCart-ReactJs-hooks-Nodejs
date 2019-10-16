import React , { useContext , useState } from 'react'
import { CartContext } from '../Context/CartContext'
import { Card , Button } from 'antd';


const Tshirt = (props) => {
    const [total , setTotal] = useState(1)
    const [cart , setCart] = useContext(CartContext)

    const addToCart = () =>{
    const Tshirt = { id:props.id, img:props.img ,  name : props.name , price : props.price , count:total , totalprice : props.price * total }

        const match = cart.filter(cart => cart.id === props.id)
        if(match.length === 0){            
            setCart(curr => [...curr , Tshirt])
            console.log('เพิ่มสินค้า', cart)
        }else{
            const removeIndex  = cart.map(cart => cart.id).indexOf(props.id)
            console.log( 'จุด' , removeIndex)
            cart.splice(removeIndex,1)
            setCart(curr => [...curr , Tshirt])

            console.log('เพื่มจำนวน' , cart)
        }

        console.log('มีสินค้าแล้ว' , match)

    }

    const plus = () =>{
        setTotal(total+1)
        
    }

    const remove = () =>{
        setTotal(total-1)
    }
    
     

    return (
        <div>
            <Card
                hoverable
                style={{ width: 330 , textAlign:"center" , alignItems:"center"}}
                cover={<img className="productImg" alt="example" src={props.img} />}  >
                <h2>{props.name}</h2>
                    <br/>
                    <h4>{props.price * total} บาท</h4>
                    <br/>
                    <div>
                        <span><Button disabled={total==1} onClick={remove}>-</Button></span><span>  {total}  </span><span><Button onClick={plus}>+</Button></span>
                    </div>
                    <br/>
                    <Button type="primary" size={"large"} onClick={addToCart}><i className="fas fa-cart-plus fa-lg"/>{' '}<span>เพิ่มลงตะกร้า</span></Button>
            </Card>
        </div>
    )
}

export default Tshirt
