import { IProduct } from "./interfaces/Product";
import products from "./models/milkModel";
export const getProductList = async (req: any, res: any) => {
  products.find((err: any, result: any) => {
    if (err) {
      res.send("Error!");
    } else {
      console.log(JSON.stringify(result));
      res.send(result);
    }
  });
};

export const createProduct = async (req: any, res: any) => {
  const request: IProduct = req.body;
  let prod = new products(request);
  prod.save((err: any, result: any) => {
    if (err) {
      res.send("Error!");
    } else {
      res.send(result);
    }
  });
};
