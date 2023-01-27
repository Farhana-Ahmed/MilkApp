// import mongoose from "mongoose";

// interface IProduct {
//     name: string,
//     type: string,
//     storage: number,
//     id:string
// }

// const productSchema = new mongoose.Schema({
    
//     name: {
//         type: String,
//         required: false
//     },
//     type: {
//         type: String,
//         required: false
//     },
//     storage: {
//         type: Number,
//         required: false
//     },
//     id: {
//         type: String,
//         required: false
//     }
// })

// productSchema.statics.build = (attr: IProduct) => {
//     return new Product(attr)
// }

// const Product= mongoose.model('Milk', productSchema)

// export { Product }

import {
    Schema
  } from 'mongoose';
  import mongoose from 'mongoose';
  
  export const Product = new Schema({
    id: { type: mongoose.Schema.Types.ObjectId, required: false },
    name: String,
    type: String,
    storage: Number,
  });

const products = mongoose.model("products", Product);
export default products;