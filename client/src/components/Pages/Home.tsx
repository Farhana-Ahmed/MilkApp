import React, { useState } from "react";
import { Container } from "react-bootstrap";
import useFetch, { useMultiselect } from "../hooks/useFetch";

import Product from "../Product/Product";
import ProductsList from "../ProductsList/ProductsList";
import "../ProductsList/styles.css";
const Home = () => {
  const { products } = useFetch();
const types = [new Set(products.map((product) => product.type))]
// const types = 

console.log('without duplicates', types)
// const { selected, isSelected, onChange } = useMultiselect([]);
  const [search, setSearch]: [string, (search: string) => void] =
    React.useState("");
  const [click, setClick] = useState<boolean>();
  
  const handleChange = (e: { target: { value: string } }) => {
    setSearch(e.target.value);
  };
  const handleSearch = (e: React.FormEvent) => {
    setClick(true);
  };
  return (
    <>
      <input
        onChange={handleChange}
        type="text"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
      />
      <button onClick={handleSearch}>Search</button>
      
      <Container className="mt-3 home">
        {!click ? (
          <ProductsList />
        ) : (
          products.map((product, index) => {
            if (product.name.toLowerCase().includes(search.toLowerCase())) {
              return <Product key={index} product={product} />;
            }
            return null;
          })
        )}
      </Container>
    </>
  );
};

export default Home;
