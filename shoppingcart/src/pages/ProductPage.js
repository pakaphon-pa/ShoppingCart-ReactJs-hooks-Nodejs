import React , { useState , useEffect } from 'react'
import { Row, Col } from 'antd';

import Tshirt from '../components/Tshirt'
import PageTitle from '../components/PageTitle';

const ProductPage = () => {

    const [ products , setProducts ] = useState([])
    const [loading , setLoading] = useState(false)

    const database = [
        { name : "red tshirt " , img: "https://4.imimg.com/data4/MS/GX/MY-9185795/mens-polo-red-t-shirt-500x500.jpg" , price:150 , id : 1},
        { name : "yellow tshirt " , img: "http://cdn.shopify.com/s/files/1/0232/3963/products/plain-yellow-tshirt_grande.jpg?v=1449214453" , price:180 , id : 2},
        { name : "green tshirt ", img:"https://4.imimg.com/data4/AE/MC/MY-1044551/plain-t-shirt-500x500.jpg" , price:200 , id : 3}
    ]

    useEffect(() =>{
        getProduct()
    },[])
    
    const getProduct = async () =>{
        setLoading(true)    
        const response = await fetch('http://localhost:1344/products')
        const data = await response.json()
        setProducts(data)
        setLoading(false)
    }

    if(loading){
        return(
            <h1> กำลังโหลดสินค้า... </h1>
        )
    }

    return (
        <div>
            <PageTitle title="สินค้า" />
            <Row>
            {
                products.map(item =>(
                    <Col key={item.id} span={8}>
                    <Tshirt key={item.id} id={item.id} name={item.name} price={item.price} img={item.img}   />
                    </Col>
                ))
            }

            </Row>
         
        </div>
    )
}

export default ProductPage
