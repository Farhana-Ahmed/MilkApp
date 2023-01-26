import express from "express";
import { Request, Response } from "express";
import db from '../db/milk.json'

const router = express.Router();

const milkAvailable = db.results;
router.get('/' , (_req: Request, res: Response) => {
    return res.status(200).send({ message: "example endpoint" });
})

router.get('/api/milk', (_req: Request, res: Response) => {
    return res.status(200).send(milkAvailable);
})

router.get('/api/milk/:id', (_req: Request, res: Response) => {
    return res.status(200).send(milkAvailable.filter((milk) => milk.id == (_req.params.id)));
})


export { router as milkAppRouter}