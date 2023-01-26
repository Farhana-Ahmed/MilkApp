import { useState } from "react";

import useFetch from "../hooks/useFetch";

import Pagination from "react-bootstrap/Pagination";

import Product from "../Product/Product";


const ProductsList = () => {
  const { products } = useFetch();
  // const [active, setActive] = useState(1);  
  // let pages = [];
  // const noOfCardsPerPage = 9;
  // let indexOfLastProd = active * noOfCardsPerPage;
  // let indexOfFirstProd = indexOfLastProd - noOfCardsPerPage;

  

  // const afterslice = products.slice(indexOfFirstProd, indexOfLastProd);

  // for (let number = 1; number <= products.length/9; number++) {
  //   pages.push(
  //     <Pagination.Item
  //       key={number}
  //       active={number === active}
  //       onClick={() => pagination(number)}
  //     >
  //       {number}
  //     </Pagination.Item>
  //   );
  // }
  // function pagination(number: number) {
  //   indexOfLastProd = number * noOfCardsPerPage;
  //   indexOfFirstProd = indexOfLastProd - noOfCardsPerPage;
  //   setActive(number);
  // }
  
  return (
    <div className="cards-container">
      
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}

      {/* <div className="container d-flex justify-content-center">
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
      </div> */}
    </div>
  );
};

export default ProductsList;
