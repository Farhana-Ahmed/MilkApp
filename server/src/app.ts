import express from "express";
import createHttpError from "http-errors";
import mongoose from "mongoose";
import cors from 'cors';
import { milkAppRouter } from "./routes/router";
import { Application } from "express";
// import * as productCRUD from '../src/routes/router'
import * as productCRUD from '../src/crud-mongo'

import * as dotenv  from 'dotenv'
const app: Application = express();
import helmet from 'helmet';
app.use(express.json());
dotenv.config();
const PORT = 3001;

app.use(milkAppRouter)
app.use(cors({
    origin: 'http://127.0.0.1:3000',
}))
app.use(helmet())
// let uri  : string = process.env.MONDODB_URI;
// mongoose.connect('mongodb://localhost:27017/example', {

// }, () => {
//     console.log('connected to database')
// })
mongoose.set('strictQuery', true)
mongoose.connect("mongodb+srv://Farhana-Ahmed:ahmedalimohammed@cluster0.qod9zfm.mongodb.net/pgpTestMilkApp?retryWrites=true&w=majority/" , (err: any) => {
    if(err) {
console.log(err.message)
    } else {
        console.log('connect to db')
    }
} )
app.listen(PORT, () => {
    console.log(`app started on port ${PORT}` )
})

app.get('/api/milk', productCRUD.getProductList)
app.post('/api/milk', productCRUD.createProduct)
// app.get('/api/milk/:id', productCRUD.getProductById)




export default app;

