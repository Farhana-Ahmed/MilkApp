import axios from "axios";
import React, { useEffect, useState } from "react";
import { Alert, Button, Card, Form, Modal } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { ProductItem } from "../types/IProduct";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<ProductItem>();
  const [quantity, setQuantity] = useState<string>();
  const submitDisabled = !quantity;
  const [isVisisble, setIsVisible] = useState<boolean>(false);
  const [isSubmit, setIsSubmit] = useState<boolean>(false);

  useEffect(() => {
    const getDetails = async () => {
      const oneProduct = await axios.get(
        `http://localhost:3001/api/milk/${id}`
      );
      console.log("one product from details component", oneProduct.data);
      setProduct(oneProduct.data[0]);
    };
    getDetails();
  }, [id]);

  useEffect(() => {
    if (isSubmit) {
      const interval = setInterval(() => {
        setIsVisible(!isVisisble);
        setIsSubmit(false);
      }, 1500);
      return () => clearInterval(interval);
    }
  }, [isSubmit, isVisisble]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(e.target.value);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsSubmit(true);
  };

  return (
    <div className="product-details">
      <Card className="card" style={{ width: "18rem", margin: "10px" }}>
        <Card.Img
          className="card-img"
          variant="top"
          src={"https://i.insider.com/5d940dbe6f24eb6a90370663?width=500"}
        />
        <Card.Body>
          <Card.Title>{product?.name} </Card.Title>
          <Card.Subtitle>{product?.type}</Card.Subtitle>
          <Card.Text>{product?.storage} liter</Card.Text>
          <Form.Control
            type="number"
            placeholder="Enter quantity"
            onChange={handleChange}
            value={quantity}
          />
          <Button
            variant="primary"
            disabled={submitDisabled}
            onClick={handleClick}
          >
            Order
          </Button>
        </Card.Body>
        <Link to="/">
          <button>Back</button>
        </Link>
      </Card>

      {isSubmit ? (
        <Alert variant="success">{quantity} Liters Ordered successfully</Alert>
      ) : null}
    </div>
  );
};

export default ProductDetails;
