import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import { milkAppRouter } from "./routes/router";
import { Application } from "express";
import * as productCRUD from '../src/routes/router'
// import * as productCRUD from '../src/crud-mongo'

import * as dotenv  from 'dotenv'
const app: Application = express();
import helmet from 'helmet';
app.use(express.json());
dotenv.config();
const PORT = 3001;
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });
app.use(milkAppRouter)
app.use(cors({
    origin: 'http://127.0.0.1:3000',
}))
app.use(helmet())

app.listen(PORT, () => {
    console.log(`app started on port ${PORT}` )
})

app.get('/api/milk', productCRUD.getProductList)
// app.post('/api/milk', productCRUD.createProduct)
// app.get('/api/milk/:id', productCRUD.getProductById)

export default app;

