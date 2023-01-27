import express from "express";
import { Request, Response } from "express";
import db from '../db/milk.json'

import * as ProductService from '../ProductService'
import Error from 'http-errors'
import { IProduct } from "../interfaces/Product";
const router = express.Router();

const milkAvailable = db.results;
// router.get('/' , (_req: Request, res: Response) => {
//     return res.status(200).send({ message: "example endpoint" });
// })

// router.get('/api/milk', (_req: Request, res: Response) => {
//     return res.status(200).send(milkAvailable);
// })

// router.get('/api/milk/:id', (_req: Request, res: Response) => {
//     return res.status(200).send(milkAvailable.filter((milk) => milk.id == (_req.params.id)));
// })

// router.post('/api/milk', (_req: Request, res: Response) => {
//     //req,body
//     return res.status(200).send(milkAvailable);
// })


export const getProductList = async(_req: Request, res: Response) => {
    const productList: IProduct[] = await ProductService.getAllProducts();
    try {
        res.status(200).send(productList);
    } catch (error : any ){
        res.status(404).send({message: error.message})
    }
}

export const getProductById = async( _req: Request, res: Response) => {
    const productById : IProduct[] = await ProductService.getProductById(_req.params.id)
    try {
        res.status(200).send(productById)
        
    } catch (error: any) {
        res.status(404).send({message : error.message})
        
    }
}


export { router as milkAppRouter}