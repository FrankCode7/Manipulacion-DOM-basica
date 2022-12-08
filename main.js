
// la forma de trabajar es crear variables que representen a los elementos  del html en js

const h1=document.querySelector("h1")

// De esta forma almacenamos los valores de html (input1 , imput 2 , resultado) a js
const input1=document.querySelector("#calculo1");
const input2=document.querySelector("#calculo2");
const resultado=document.querySelector("#resultado")

// De esta forma mandamos a traer las acciones de los botones cuando realizen alguna accion
const btnSumar=document.querySelector("#btnSumar")
const formulario=document.querySelector("#formulario")
const btnRestar=document.querySelector("#btnRestar")
const btnProducto=document.querySelector("#btnMultiplicar")
const btnDivision=document.querySelector("#btnDividir")

// Relacionamos los botonos con las funciones con el addEventListener ( Esto aplica cuando no se usan formulacios)
/* 
btnSumar.addEventListener("click",btnSumar1);
btnRestar.addEventListener("click",btnRestar2);
btnProducto.addEventListener("click",btnProducto3);
btnDivision.addEventListener("click",btnDivision4);

*/

// Cuando usamos formularios en el html la pagima se recarga por  por el submit por 
// lo tanto se tiene que escuchar la accion que realiza el formulario con el siguiente codigo

formulario.addEventListener("submit",btnSumar1);

// Creamos las funciones de cada boton
function btnSumar1(event){
    event.preventDefault();
    // convertimos a numeros los datos input1 e input 2 y los almacenamos en una variable
   const suma=  parseInt(input1.value) + parseInt(input2.value) 
   // mostramos el resultado con la funcion innerText(reemplaza un texto) y lo almacenamos en resultado
   resultado.innerText = "El resultado de la suma es:  " + suma;
}
function btnRestar2(){
    const resta= parseInt(input1.value) - parseInt(input2.value)
    resultado.innerText="El resultado de la resta es:  "+ resta;
}

function btnProducto3(){
    const producto=  parseInt(input1.value) * parseInt(input2.value)
    resultado.innerText="El resultado del producto es :"+ producto;
}

function btnDivision4(){
    const division=  parseInt(input1.value) / parseInt(input2.value)
    resultado.innerText="El resultado de la division es: "+ division;
}