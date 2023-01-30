
import db from "./db/milk.json";
import { IProduct } from "./interfaces/Product";

const products = db.results;
export const getAllProducts = async (): Promise<IProduct[]> => {
  return products;
};

export const getProductById = async (id: string) => {
  return products.filter((product) => product.id == id);
};

export const createProducts = async (product:IProduct): Promise<void> => { 
    // products.push(product || 0);  
}

export const updateProducts = async (product:IProduct): Promise<void> => { 
  let index = products.findIndex(d => d.id === product['id']);
  if(index >0 || index==0)
 {
  products[index]['name'] = product['name'];
  products[index]['type'] = product['type'];
  products[index]['storage'] = product['storage'] || 0;
 }
}
