import React ,  { useContext } from 'react'
import { Navbar , Nav , Form , FormControl , Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import {CartContext} from '../Context/CartContext'

const Header = () => {
    const [cart , setCart] = useContext(CartContext)

    return (
            <>
            <Navbar  bg="dark" variant="dark">
                <Navbar.Brand as={Link} to={'/'}>ShoppingCart</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to={'/'} >
                        <i className="fas fa-home fa-2x" />{' '}
                        <span className="NavbarFont">หน้าแรก</span>
                    </Nav.Link>
                    <Nav.Link as={Link} to={'/product'} >
                        <i className="fab fa-product-hunt fa-2x" />{' '}
                        <span className="NavbarFont">สินค้า</span>
                    </Nav.Link>
                </Nav>
                <Form inline>
                    <Nav.Link as={Link} to={'/cartpage'} >
                        <i className="fas fa-shopping-cart fa-2x" />{'  '}
                        <span className="NavbarFont">{cart.length}</span>
                    </Nav.Link>
                </Form>
            </Navbar>
            </>
    )
}

export default Header
