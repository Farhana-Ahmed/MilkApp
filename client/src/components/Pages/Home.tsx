import React from 'react'
import { Container } from 'react-bootstrap'
import ProductsList from '../ProductsList/ProductsList'
import '../ProductsList/styles.css'
const Home = () => {
  return (
   <Container className = 'mt-3 home'>
      <ProductsList />
</Container>
  )
}

export default Home