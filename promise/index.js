const promise = new Promise ((resolve, reject) => {
    resolve('resuelto')
})


setTimeout(() => {
    promise
        .then(result => console.log(result))
        .catch(error => console.log(error))
}, 2000)

const cows = 20;
const countCows = new Promise ((resolver, rechazar)=> {
    if (cows > 10) {
        resolver('si hay el minimo de vacas')
    } else {
        rechazar('no hay el minimo de vacas')
    }
});

countCows
    .then(result => {
    console.log(result);
    })
    .catch(error => console.log(error))
    .finally(()=> console.log('finalizado'));



    export function delay(time, message) {
        const promesa = new Promise((resolve, reject) => {
          resolve("message")
        })
      
        setTimeout(() => {
          promesa.then(resultado => console.log(resultado))
        },2000)
      }
      

const delay = (time, message) => {
    return new Promise ((resolve,reject)=>{
        setTimeout(() => {
            reject(message)
        },time)
    })
}

delay(2000, "jo;a").catch(resultado => console.log(resultado))



const cows2 = 3;
const countCows2 = new Promise ((resolve, reject)=> {
    if (cows2 > 10) {
        resolve('si hay el minimo de vacas')
    } else {
        reject('no hay el minimo de vacas')
    }
});

countCows2
    .then(result => {
    console.log(result);
    })
    .catch(error => console.log(error))
    .finally(()=> console.log('finalizado'));
