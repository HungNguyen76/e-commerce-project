import React from 'react'
import styled from 'styled-components'
import { useCartContext } from '../context/cart_context'
import {Link} from 'react-router-dom'
import { CartContent } from '../components'
const CartPage = () => {
    const { cart} = useCartContext()

    if(cart.length < 1) {
        return (
            <Wrapper className='page-100'>
                <div className='empty'>
                    <h2>There are no items in your bag</h2>
                    <Link to='/' className='btn'>
                        Buy a product
                    </Link>
                </div>
            </Wrapper>
        )
    }
    return (
        <main>
            <Wrapper className='page'>
                <CartContent />
            </Wrapper>
        </main>
    )
}
const Wrapper = styled.main`
    .empty {
        margin-top: 5rem;
        text-align: center;
        h2 {
            margin-bottom: 1rem;
            text-transform: none;
        }
    }
`
export default CartPage;