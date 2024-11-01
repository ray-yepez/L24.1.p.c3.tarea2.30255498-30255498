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
