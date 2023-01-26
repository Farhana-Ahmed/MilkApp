import express from "express";
import createHttpError from "http-errors";
import mongoose from "mongoose";
import cors from 'cors';
import { milkAppRouter } from "./routes/router";
import { Application } from "express";
const app: Application = express();

app.use(express.json());

const PORT = 3001;

app.use(milkAppRouter)
app.use(cors({
    origin: 'http://127.0.0.1:3000',
}))
mongoose.connect('mongodb://localhost:27017/example', {
    // useUnifiedTopology: true
}, () => {
    console.log('connected to database')
})
app.listen(PORT, () => {
    console.log(`app started on port ${PORT}` )
})





export default app;