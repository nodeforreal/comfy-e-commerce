import React from 'react'
import styled from 'styled-components';
import {Hero,Featured,Testimonial,Newsletter} from '../components';

const Home = () => {
  return (
    <Wrapper>
      <Hero />
      <Featured />
      <Testimonial />
      <Newsletter />
    </Wrapper>
  )
}

const Wrapper = styled.main`
  
`
export default Home