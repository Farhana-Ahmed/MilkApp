
// import db from "./db/milk.json";
import { IProduct } from "./interfaces/Product";
import products from './models/milkModel';
// const products = db.results;
export const getProductList = async (req:any, res:any) => {
    // console.log('this is coming while hitting get req')
    products.find((err: any, result: any) => {
        if (err) {
          res.send("Error!");
        } else {
        console.log(JSON.stringify(result))
          res.send(result);
        }
      });
  };

  export const createProduct = async (req:any, res:any) => {
    const request: IProduct = req.body;
    let prod = new products(request);
    console.log('this is from here',prod)

    prod.save((err:any, result:any) => {
        if (err) {
            res.send("Error!");
          } else {
          console.log('must be from here',JSON.stringify(result))
            res.send(result);
          }
    });
  };
