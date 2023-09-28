const suma = (num1, num2) => {
    return num1 + num2;
}

const calc =(num1,num2,callback) => {
    return callback(num1,num2);
}

console.log(calc(2,5,suma));
console.log(calc(2,5, (b,a)  => b + a));

setTimeout(function(){console.log("object");}, 2000); // 2 segundos

function saludodo(nombre){
    console.log(`hola ${nombre}`);
}

setTimeout(saludodo, 2000, "jose");

const sumar = (callback) => callback(5,2);

sumar((dato1,dato2)=>{console.log(dato1+dato2);})

