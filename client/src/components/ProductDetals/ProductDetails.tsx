import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { IProduct, ProductItem } from "../types/IProduct";
interface Props {
  product: ProductItem;
  // handleAdd : (product: ProductItem) => void;
}

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<ProductItem>()
  console.log("id from product details", useParams());

  useEffect(() => {
    const getDetails = async () => {
      const oneProduct = await axios.get(`http://localhost:3001/api/milk/${id}`);
      console.log("one product from details component", oneProduct.data);
      setProduct(oneProduct.data[0])
    };
    getDetails();
  }, [id]);

  return <div>
    <Card  className='card'style={{ width: '18rem' ,margin:'10px'}}>
      <Card.Img className='card-img'variant="top" src= {'https://i.insider.com/5d940dbe6f24eb6a90370663?width=500'}/>
      <Card.Body>
        <Card.Title>{product?.name}  </Card.Title>
        <Card.Subtitle>{product?.type}</Card.Subtitle>
        <Card.Text>
         {product?.storage} liter
        </Card.Text>
      </Card.Body>
    </Card>
  </div>;
};

export default ProductDetails;
