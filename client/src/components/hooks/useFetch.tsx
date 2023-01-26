
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


export const useMultiselect = (initialValue: string[]) => {
  const [selected, setSelected] = useState<string>();

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    // const index = selected.indexOf(value);
    // if (index > -1) {
    //   setSelected([...selected.slice(0, index), ...selected.slice(index + 1)]);
    // } else {
    //   setSelected([...selected, ...[value]]);
    // }
    setSelected(selected)
  };

  // const isSelected = (value: string) => {
  //   return selected.includes(value);
  // };

  return { selected, onChange };
};

// eslint-disable-next-line react-hooks/rules-of-hooks

export default useFetch;
