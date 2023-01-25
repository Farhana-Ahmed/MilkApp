import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { ProductItem } from '../types/IProduct'
import '../Product/styles.css'
interface Props {
    product: ProductItem,
    handleAdd : (product: ProductItem) => void;
}

const handleClick = (e: React.MouseEvent) =>{
  e.preventDefault()
}

const Product = ({product, handleAdd} : Props) => {
  return (
    <Card  onClick={handleClick} className='card'style={{ width: '18rem' ,margin:'10px'}}>
      <Card.Img className='card-img'variant="top" src= {'https://i.insider.com/5d940dbe6f24eb6a90370663?width=500'}/>
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
         {product.type}
        </Card.Text>
        <Button variant="primary" onClick={handleClick}>BuyMilk</Button>
      </Card.Body>
    </Card>
  )
}

export default Product