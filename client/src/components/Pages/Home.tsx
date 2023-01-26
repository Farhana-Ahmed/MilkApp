import React, { useState } from "react";
import { Container } from "react-bootstrap";
import useFetch, { useMultiselect } from "../hooks/useFetch";
import Select from "react-select";
import Product from "../Product/Product";
import ProductsList from "../ProductsList/ProductsList";
import "../ProductsList/styles.css";
const Home = () => {
  const { products } = useFetch();
  // const types = [new Set(products.map((product) => product.type))]
  // console.log('without duplicates', types.join(' '))
  const types = [
    "Cashew milk",
    "Whole milk",
    "Pea milk",
    "Walnut milk",
    "Rice milk",
    "Coconut milk",
    "Soy milk",
    "Hemp milk",
    "Almond milk",
    "Oat milk",
    "Macadamia milk",
  ];

  const [search, setSearch]: [string, (search: string) => void] =
    React.useState("");
  const [click, setClick] = useState<boolean>();
  const [filter, setFilter] = useState<string>("all");
  const [isFilter, setIsFilter] = useState<boolean>(false);
  const filteredProducts = () => {
    let filteredProducts;
    if (filter !== "all") {
      filteredProducts = products.filter((product) => product.type === filter);
      // productsList = filteredProducts.slice(indexOfFirstProd, indexOfLastProd)
    }
    return filteredProducts;
  };

  console.log("these are filtered", filteredProducts()); //call

  const handleFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value);
    setIsFilter(true);
    console.log("value of boolean filter ", isFilter, filter);
  };
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
      <select value="all" onChange={handleFilter}>
        <option>select</option>
        {types.map((item, index) => {
          return (
            <option key={`key${index}`} value={`${item}`}>
              {item}
            </option>
          );
        })}
      </select>
         <ProductsList />

      <Container className="mt-3 home">
         {/* <ProductsList /> */}
        {click && (
          products.map((product, index) => {
            if (product.name.toLowerCase().includes(search.toLowerCase())) {
              return <Product key={index} product={product} />;
            }
          })
        )}
        {isFilter &&
          filteredProducts()?.map((product) => <Product product={product} />)}
      </Container>
    </>
  );
};

export default Home;
