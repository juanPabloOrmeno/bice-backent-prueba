import { Router, Request, Response } from "express";
import { indeconLast } from "./../classes/valores.service"

const productoRouter = Router();

//ver productos
productoRouter.post('/', async (req: any, res: Response) => {
    const body = req.body;

    try {


        const tipo = body.tipo || "dolar"
        const fecha = body.fecha 


        let datos = await indeconLast(tipo,fecha)
        res.status(200).send({
            status: "true",
            datos: datos.data
        });

    } catch (e) {
        res.status(500).json({
            status: false,
            error: e
        })
    }
});







export default productoRouter;