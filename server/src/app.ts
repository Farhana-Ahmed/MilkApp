import express from "express";
import createHttpError from "http-errors";
import cors from 'cors';

import { Request, Response, Application } from "express";
import db from '../src/db/milk.json'
const app: Application = express();

app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cors);
const PORT = 3001;

const milkAvailable = db.results;

app.use(cors({
    origin: 'http://127.0.0.1:3000',
}))
app.listen(PORT, () => {
    console.log(`app started on port ${PORT}` )
})

app.get('/' , (_req: Request, res: Response) => {
    return res.status(200).send({ message: "example endpoint" });
})

app.get('/api/milk', (_req: Request, res: Response) => {
    return res.status(200).send(milkAvailable);
})

export default app;