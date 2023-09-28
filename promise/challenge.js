import fetch from "node-fetch";

const API = 'https://api.escuelajs.co/api/v1';

const fetchData = (url_api) =>  {return fetch(url_api)}
fetchData(`${API}/products`)
    .then(respuesta => respuesta.json())
    .then(productos => console.log(productos))
    .catch(error => console.log(error))