import axios from 'axios';
import { URL_LAST, URL_TIPOS } from '../global/environment';


let indeconTipo = async(tipo: string , fecha: string) => await axios.get(`${URL_LAST}/${tipo}/${fecha}`);

let tipos = async() =>  (await axios.get(URL_TIPOS)).data


export {indeconTipo, tipos}