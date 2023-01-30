import React, { useState } from "react";
import { Container, Pagination } from "react-bootstrap";
import useFetch from "../hooks/useFetch";
import Product from "../Product/Product";
import "../ProductsList/styles.css";
import "../Pages/Home.css";

const Home = () => {
  const { products } = useFetch();
  const [active, setActive] = useState(1);
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

  const selectOptions = types.map((item) => ({ label: item, value: item }));

  const [search, setSearch]: [string, (search: string) => void] =
    React.useState("");
  const [click, setClick] = useState<boolean>();
  const [filter, setFilter] = useState<string>("all");
  const [isFilter, setIsFilter] = useState<boolean>(false);
  const [selectedCategories, setCategories] = useState(selectOptions);

  const filteredProducts = () => {
    let filteredProducts;
    if (filter !== "all") {
      filteredProducts = products.filter((product) => product.type === filter);
    }
    return filteredProducts;
  };

  const handleFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value);
    setIsFilter(true);
  };
  const handleChange = (e: { target: { value: string } }) => {
    setSearch(e.target.value);
  };
  const handleSearch = (e: React.FormEvent) => {
    setClick(true);
  };

  let pages = [];
  const noOfCardsPerPage = 9;
  let indexOfLastProd = active * noOfCardsPerPage;
  let indexOfFirstProd = indexOfLastProd - noOfCardsPerPage;

  const afterslice = products.slice(indexOfFirstProd, indexOfLastProd);

  for (let number = 1; number <= products.length / 9; number++) {
    pages.push(
      <Pagination.Item
        key={number}
        active={number === active}
        onClick={() => pagination(number)}
      >
        {number}
      </Pagination.Item>
    );
  }
  function pagination(number: number) {
    indexOfLastProd = number * noOfCardsPerPage;
    indexOfFirstProd = indexOfLastProd - noOfCardsPerPage;
    setActive(number);
  }
  return (
    <>
      <div className="form-container">
        <input
          onChange={handleChange}
          type="text"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <button onClick={handleSearch}>Search</button>
        <select value="all" onChange={handleFilter}>
          <option>Filter</option>
          {types.map((item, index) => {
            return (
              <option key={`key${index}`} value={`${item}`}>
                {item}
              </option>
            );
          })}
        </select>
      </div>

      <h5>{products.length} products</h5>

      <Container className="mt-3 home">
        {!click &&
          !isFilter &&
          afterslice.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        {click &&
          products.map((product, index) => {
            if (product.name.toLowerCase().includes(search.toLowerCase())) {
              return <Product key={index} product={product} />;
            }
            return null;
          })}
        {isFilter &&
          filteredProducts()?.map((product, index) => (
            <Product product={product} key={index} />
          ))}
      </Container>

      <div className="container d-flex justify-content-center">
        <Pagination size="sm">
          <Pagination.Prev
            onClick={() => {
              if (active > 1) {
                pagination(active - 1);
              }
            }}
          />
          {pages}
          <Pagination.Next
            onClick={() => {
              if (active < 5) {
                pagination(active + 1);
              }
            }}
          />
        </Pagination>
      </div>
    </>
  );
};

export default Home;
