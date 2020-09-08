import { Router, Request, Response } from "express";


const productoRouter = Router();

//ver productos
productoRouter.post('/', async (req: any, res: Response) => {
    const body = req.body;

    try {


        res.status(200).send({
            status: "true",
            respons: ''
        });

    } catch (e) {
        res.status(500).json({
            status: false,
            error: e
        })
    }
});







export default productoRouter;