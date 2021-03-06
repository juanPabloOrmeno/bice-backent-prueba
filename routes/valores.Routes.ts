import { Router, Request, Response } from "express";
import { indeconTipo , tipos, valoresTipo } from "./../classes/valores.service"

const productoRouter = Router();

//ver productos
productoRouter.post('/valores', async (req: any, res: Response) => {
    const body = req.body;

    try {


        const tipo = body.tipo || "dolar"
        const fecha = body.fecha 


        let datos = await indeconTipo(tipo,fecha)
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



//ver productos
productoRouter.post('/valoresTipo', async (req: any, res: Response) => {
    const body = req.body;

    try {


        const tipo = body.tipo || "dolar"
       


        let datos = await valoresTipo(tipo)
        res.status(200).send({
            status: "true",
            datos: datos
        });

    } catch (e) {
        res.status(500).json({
            status: false,
            error: e
        })
    }
});




//ver productos
productoRouter.get('/tipos', async (req: any, res: Response) => {
    const body = req.body;

    try {

        let datos = await tipos()


        console.log(datos)
        res.status(200).send({
            status: "true",
            datos: datos
        });

    } catch (e) {
        res.status(500).json({
            status: false,
            error: e
        })
    }
});







export default productoRouter;