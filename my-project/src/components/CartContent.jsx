import React from 'react'
import styled from 'styled-components'
import { useCartContext } from '../context/cart_context'
import {Link} from 'react-router-dom'
import { CartItem, CartColumns } from '../components';
import CartTotals from './CartTotals';

const CartContent = () => {
    const { cart } = useCartContext()
    return (
        <Wrapper className='section section-center'>
            <CartColumns />
            {cart.map(item => {
                return <CartItem key={item.id} {...item}/>
            })}
            <hr />
            
        <CartTotals />
        </Wrapper>
    )
}
const Wrapper = styled.section`

`
export default CartContent;