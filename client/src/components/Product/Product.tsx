import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { ProductItem } from "../types/IProduct";
import "../Product/styles.css";
import { Link } from "react-router-dom";
import ProductDetails from "../ProductDetals/ProductDetails";

interface Props {
  product: ProductItem;
}

const Product = ({ product }: Props) => {
  const [isClick, setIsClick] = useState<boolean>(false);
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsClick(true);
  };
  return (
    <Card
      onClick={handleClick}
      className="card"
      style={{ width: "18rem", margin: "10px" }}
    >
      <Card.Img
        className="card-img"
        variant="top"
        src={"https://i.insider.com/5d940dbe6f24eb6a90370663?width=500"}
      />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.type}</Card.Text>
        <Card.Text>{product.storage} liter</Card.Text>
        <Link to={`/milk/${product.id}`}>
          <button onClick={handleClick}>See Details</button>
        </Link>
        {isClick ? <ProductDetails /> : null}
      </Card.Body>
    </Card>
  );
};

export default Product;
