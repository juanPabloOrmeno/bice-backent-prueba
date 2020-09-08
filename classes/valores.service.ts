import axios from 'axios';
import { URL_LAST } from '../global/environment';


let indeconLast = async(tipo: string , fecha: string) => {
    let datos = await axios.get(`${URL_LAST}/${tipo}/${fecha}`);
    return datos
}





export {indeconLast}