import Dt_articulos from "./data.js";

Dt_articulos.forEach((articulo) => {
  alert(articulo.nombre);
});

let nombresArticulos = () => {
  return Dt_articulos.map((articulo) => articulo.nombre);
};

alert(JSON.stringify(nombresArticulos()));

// Mostrar los nombres de los artículos junto a su precio
let articulosSuPrecio = () => {
  return Dt_articulos.map(
    (articulo) => `${articulo.nombre}: $${articulo.costo * 1.25}`
  );
};

alert(JSON.stringify(articulosSuPrecio()));

let valenMasDe = (costo) => {
  return Dt_articulos.filter((articulo) => articulo.costo > costo);
};

// Valen más de 500
alert(`Valen más de $500: ${JSON.stringify(valenMasDe(500))}`);

// Valen más de 300
alert(`Valen más de $300: ${JSON.stringify(valenMasDe(300))}`);


let agregarArticulo = (art) => {
  Dt_articulos.push(art);
  return "Artículo agregado: " + JSON.stringify(art);
}
 alert(agregarArticulo({id:6,nombre:"Chicha",costo: 500}));
 alert(JSON.stringify(articulosSuPrecio()));

 let meterArticulo = (art) => {
  Dt_articulos.forEach((obj) => {
    obj.id++;
  });
  Dt_articulos.unshift(art);
  return "Articulo añadido: " + JSON.stringify(art);
 }

 alert(meterArticulo({id:1,nombre:"Malta", costo: 800}));
 alert(JSON.stringify(articulosSuPrecio()));

 let  quitarUlt = () =>  "Se eliminó" + JSON.stringify(Dt_articulos.pop());
 

 alert(quitarUlt());
 alert(JSON.stringify(articulosSuPrecio()));

 let quitarPrim = () => {
  Dt_articulos.forEach(art => {
    art.id--;
  });
  return "Se eliminó " + JSON.stringify(Dt_articulos.shift());
 }

 alert(quitarPrim());
 alert(JSON.stringify(articulosSuPrecio()));

 let quitar = (pos) => {
  return "Se eliminó: " + JSON.stringify(Dt_articulos.splice(pos));
 }

 alert(quitar(3));
 alert(JSON.stringify(articulosSuPrecio()));

alert(JSON.stringify(Dt_articulos.reverse()));
