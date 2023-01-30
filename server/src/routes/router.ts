import express from "express";
import { Request, Response } from "express";
import db from "../db/milk.json";

import * as ProductService from "../ProductService";
import Error from "http-errors";
import { IProduct } from "../interfaces/Product";
const router = express.Router();

const milkAvailable = db.results;

export const getProductList = async (_req: Request, res: Response) => {
  const productList: IProduct[] = await ProductService.getAllProducts();
  try {
    res.status(200).send(productList);
  } catch (error: any) {
    res.status(404).send({ message: error.message });
  }
};

export const getProductById = async (_req: Request, res: Response) => {
  const productById: IProduct[] = await ProductService.getProductById(
    _req.params.id
  );
  try {
    res.status(200).send(productById);
  } catch (error: any) {
    res.status(404).send({ message: error.message });
  }
};

export { router as milkAppRouter };
