
import { useEffect, useState } from "react";
import { getData } from "../helpers/getData";
import { IProduct } from "../types/IProduct";

const useFetch = () => {
  getData();

  const [data, setData] = useState<IProduct>({
    products: [],
    isError: false,
    isLoading: true,
  });
  useEffect(() => {
    const resultsFromApi = async () => {
      const results = await getData();
      setData({
        products: results,
        isLoading: true,
        isError: false,
      });
    };
    resultsFromApi();
  }, []);
  return data;
};

// eslint-disable-next-line react-hooks/rules-of-hooks

export default useFetch;
