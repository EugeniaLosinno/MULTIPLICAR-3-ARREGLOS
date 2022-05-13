let btnEnviar = <HTMLButtonElement>document.getElementById("btnEnviar");

let numero = <HTMLInputElement>document.getElementById("cantidad");

let informeV1 = <HTMLParagraphElement>document.getElementById("informeV1");
let informeV2 = <HTMLParagraphElement>document.getElementById("informeV2");
let informeV3 = <HTMLParagraphElement>document.getElementById("informeV3");
let producto = <HTMLParagraphElement>document.getElementById("producto");

let cantidadAIngresar : number = 0;

function cargarNumerosVector(vector: number[], grupo:string) {
  for (let indice = 0; indice < vector.length; indice++) {
     vector[indice] = Number(prompt("Ingrese el número " + (indice + 1) + " del " + grupo + " grupo"));
  };
};

function mostrarContenidoVector(vector: number[]) { 
  for (let indice = 0; indice < vector.length; indice++) {
    console.log(vector[indice]);
};
};

function multiplicarArreglo(vector1: number[], vector2: number[], vector3: number[],vectorResultado: number[]){ 
  for (let indice = 0; indice < vector1.length; indice++) {
    vectorResultado[indice] = (vector1[indice] * vector2[indice] * vector3[indice]);
},
};

btnEnviar.addEventListener("click", () => { 
   cantidadAIngresar = Number(numero.value);
   let vectorPrimero: number[] = new Array(cantidadAIngresar);
   let vectorSegundo: number[] = new Array(cantidadAIngresar);
   let vectorTercero: number[] = new Array(cantidadAIngresar);
   let vectorProducto: number[] = new Array(cantidadAIngresar);
   
   cargarNumerosVector(vectorPrimero,"primer");
   cargarNumerosVector(vectorSegundo,"segundo");
   cargarNumerosVector(vectorTercero,"tercer");
   multiplicarArreglo(vectorPrimero,vectorSegundo,vectorTercero,vectorProducto);
   informeV1.innerHTML = `Los números ingresados en el primer grupo son ${vectorPrimero}`;
   informeV2.innerHTML = `Los números ingresados en el segundo grupo son ${vectorSegundo}`;
   informeV3.innerHTML = `Los números ingresados en el tercer grupo son ${vectorTercero}`;
   producto.innerHTML = `El resultado de multiplicar los 3 grupos de números son ${vectorProducto}`;
  
   console.log("El primer grupo de números");
   mostrarContenidoVector(vectorPrimero);
   console.log("El segundo grupo de números");
   mostrarContenidoVector(vectorSegundo);
   console.log("El tercer grupo de números");
   mostrarContenidoVector(vectorTercero);
   console.log("El producto de los tres grupos de números");
   mostrarContenidoVector(vectorProducto);
   
});