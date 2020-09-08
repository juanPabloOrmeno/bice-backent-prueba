import axios from 'axios';
import { URL_LAST, URL_TIPOS } from '../global/environment';


let indeconTipo = async(tipo: string , fecha: string) => {
    let datos = await axios.get(`${URL_LAST}/${tipo}/${fecha}`);
    return datos
}



let tipos = async() => {
    let datos = await axios.get(URL_TIPOS)

    let objectArray = Object.entries(datos.data);
    return objectArray.map(dato => {
        console.log(dato)
        return dato[0]
    })
}





export {indeconTipo, tipos}