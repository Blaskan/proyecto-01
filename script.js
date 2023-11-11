const carrusel = document.querySelector("carrusel-items") ;

let intervalo = null;
let step = 1;
const start = () => {
    intervalo = setInterval(function () {
        carrusel.scrollLeft = carrusel.scrollLeft + 10;
    }, 10);
 };

 const stop = () => {};

  start();