import React from 'react'
import { CartEmpty } from '../components';
import styled from 'styled-components/macro';

const Cart = () => {
  return (
    <Wrapper className='page-100'>
      <CartEmpty css={`padding-top: 2rem;`}/>
    </Wrapper>
  )
}

const Wrapper = styled.section``
export default Cart