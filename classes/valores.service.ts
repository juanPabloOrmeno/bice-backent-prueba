import axios from 'axios';
import { URL_LAST, URL_TIPOS, URL_VALORES_TIPO } from '../global/environment';


let indeconTipo = async(tipo: string , fecha: string) => await axios.get(`${URL_LAST}/${tipo}/${fecha}`);

let tipos = async() =>  (await axios.get(URL_TIPOS)).data

let valoresTipo = async(tipo: string) =>  (await axios.get(`${URL_VALORES_TIPO}/${tipo}`)).data


export {indeconTipo, tipos, valoresTipo}


