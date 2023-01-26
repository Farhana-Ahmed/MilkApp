import axios from "axios";
import React, { useEffect, useState } from "react";
import { Alert, Button, Card, Form, Modal } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { IProduct, ProductItem } from "../types/IProduct";
import './ProductDetails.css'
interface Props {
  product: ProductItem;
  // handleAdd : (product: ProductItem) => void;
}

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<ProductItem>()
  const [quantity, setQuantity] = useState<string>()
  const [quantityShow, setQuantityShow] = useState<boolean>(false);
  const handleQuantityShow = () => setQuantityShow(true);
  const submitDisabled = !quantity
  const [isVisisble, setIsVisible] = useState<boolean>(false);
  const [isSubmit, setIsSubmit] = useState<boolean>(false);
  console.log("id from product details", useParams());

  useEffect(() => {
    const getDetails = async () => {
      const oneProduct = await axios.get(`http://localhost:3001/api/milk/${id}`);
      console.log("one product from details component", oneProduct.data);
      setProduct(oneProduct.data[0])
    };
    getDetails();
  }, [id]);

  useEffect(() => {
    if(isSubmit) {
        const interval = setInterval(() => {
            setIsVisible(!isVisisble);
            setIsSubmit(false)
        }, 1500)
        return () => clearInterval(interval)
    }
}, [isSubmit, isVisisble]) 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
setQuantity(e.target.value)
  }

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
setIsSubmit(true)
  }

  return <div className="product-details">
    <Card  className='card'style={{ width: '18rem' ,margin:'10px' }}>
      <Card.Img className='card-img'variant="top" src= {'https://i.insider.com/5d940dbe6f24eb6a90370663?width=500'}/>
      <Card.Body>
        <Card.Title>{product?.name}  </Card.Title>
        <Card.Subtitle>{product?.type}</Card.Subtitle>
        <Card.Text>
         {product?.storage} liter
        </Card.Text>
        <Form.Control type="number" placeholder="Enter quantity" 
               onChange={handleChange}
               value={quantity}
               style={{margin:'5px'}}
               />
    <Button variant="primary" disabled={submitDisabled} onClick= {handleClick} >Order</Button>

      </Card.Body>
    </Card>
    {isSubmit ? <Alert variant="success">{quantity} Liters Ordered successfully</Alert> : null}        

    {/* <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div> */}
      
  </div>;
};

export default ProductDetails;
