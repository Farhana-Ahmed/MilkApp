import useFetch from "../hooks/useFetch";
import Product from "../Product/Product";

const ProductsList = () => {
  const { products } = useFetch();

  return (
    <div className="cards-container">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsList;
