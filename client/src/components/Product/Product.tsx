import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { ProductItem } from '../types/IProduct'
import '../Product/styles.css'
import { Link } from 'react-router-dom';
interface Props {
    product: ProductItem,
    // handleAdd : (product: ProductItem) => void;
}

const handleClick = (e: React.MouseEvent) =>{
  e.preventDefault()
}

const Product = ({product} : Props) => {

  return (
    <Card  onClick={handleClick} className='card'style={{ width: '18rem' ,margin:'10px'}}>
      <Card.Img className='card-img'variant="top" src= {'https://i.insider.com/5d940dbe6f24eb6a90370663?width=500'}/>
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
         {product.type}
        </Card.Text>
        <Link to ={`/milk/${product.id}`}>
        <Button variant="primary" onClick={handleClick}>See Details</Button>

        </Link>
      </Card.Body>
    </Card>
  )
}

export default Product