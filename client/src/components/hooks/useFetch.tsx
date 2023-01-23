//here later we can cal backend which is getAll endpoint

import { useEffect, useState } from "react";
import { getData } from "../helpers/getData";
import { IProduct } from "../types/IProduct";

const useFetch = () => {
  const [data, setData] = useState<IProduct>({
    products: [],
    isError: false,
    isLoading: true,
  });

  useEffect(() => {
    const results = getData();
    setData({
      products: results.results,
      isLoading: true,
      isError: false,
    });
  }, []);
  return data;
};

// eslint-disable-next-line react-hooks/rules-of-hooks

export default useFetch;
