const array_comidas=[];
const carrito=[];
class Comida{
    constructor(nombre,precio,disponible,grande,stock,date){
        this.nombre=nombre;
        this.precio=precio;
        this.disponible=disponible;
        this.grande=grande;
        this.stock=stock;
        this.date=date;
    }       
}
const milanesa=new Comida('milanesa',420,true,"si",5,new Date()) ;
const milanesa_napo= new Comida("milanesa_napo",490,true,"si",5,new Date());
const risotto= new Comida('risotto',420,true,"si",2,new Date());
const zapallito= new Comida('zapallito',350,true,"si",2,new Date());

array_comidas.push(milanesa,milanesa_napo,risotto,zapallito);
let eleccion;
const saludos=["hola0","hola1","hola2","hola3","hola4","hola5","hola6","hola7",];

//bucle para crear los divs
for (const producto of array_comidas) {
   let contenedor=document.createElement("div");
   contenedor.innerHTML=`<h3> Nombre: ${producto.nombre}</h3>`
   document.body.appendChild(contenedor);   
}
//pido dato para luego mostrarlo en el index
eleccion=prompt("ingrese que saludo desea de 0 a 7")
saludar(eleccion);

function saludar(eleccion){
    //Obtenemos el nodo donde vamos a agregar los nuevos elementos
    let padre=document.getElementById("nuevo");
    //Creamos un nodo <li> y se lo agrega al padre 
    let li=document.createElement("li");
    let div=document.createElement("div")
    li.innerHTML=saludos[eleccion];
    div.innerHTML=`<h1> numero elegido:${eleccion} </h>`
    padre.appendChild(li);
    padre.appendChild(div);
    }
let alJson=JSON.stringify(array_comidas);
localStorage.setItem("productos",alJson);
