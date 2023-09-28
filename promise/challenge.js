import fetch from "node-fetch";

const API = 'https://api.escuelajs.co/api/v1';

const fetchData = (url_api) =>  {return fetch(url_api)}
// fetchData(`${API}/products`)
//     .then(respuesta => respuesta.json())
//     .then(productos => console.log(productos))
//     .catch(error => console.log(error))

fetchData(`${API}/products`)
    .then(respuesta => respuesta.json())
    .then(productos => {
        fetchData(`${API}/products/${productos[0].id}`)
        .then(respuesta => respuesta.json())
        .then(producto => {
            fetchData(`${API}/categories/${producto.category.id}`)
            .then(respuesta => respuesta.json())
            .then(categoria => {
                console.log(productos[0].title);
                console.log(producto.title);
                console.log(categoria.name);
            })
            .catch(error => console.log(error))
            .finally(()=> console.log('finalizado'));
            })
        })