import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [descripcion, setdescripcion] = useState([]);
  const [loading, setLoading] = useState("Cargando...");
  const { id } = useParams();
  const item = [
    {
      id: 1,
      nombre: "Sorrentinos de Centolla",
      precio: 1100,
      categoria: "Pastas",
      imagen: "https://i.ibb.co/xgv7xGj/centolla.png",
      stock: 5,
      descripcion:
        "Relleno de centolla fueguina precocida, cebolla de verdeo, queso reggeanito, queso crema y pimienta negra.",
    },
    {
      id: 2,
      nombre: "Sorrentinos de Pollo",
      precio: 800,
      categoria: "Pastas",
      imagen: "https://i.ibb.co/QNcCwCW/pollo.png",
      stock: 6,
      descripcion:
        "Relleno de pollo fresco, cebolla rehogada, queso, crema de leche, sal y pimienta.",
    },
    {
      id: 3,
      nombre: "Ravioles de Verdura",
      precio: 700,
      categoria: "Pastas",
      imagen: "https://i.ibb.co/BjpTWSn/verdura.png",
      stock: 6,
      descripcion:
        "Relleno de espinaca, cebolla rehogada, queso crema, queso rallado, ricota, pimienta y sal.",
    },
    {
      id: 4,
      nombre: "Ravioles de Jamon y Queso",
      precio: 750,
      categoria: "Pastas",
      imagen: "https://i.ibb.co/TkQMbdf/jyq.png",
      stock: 11,
      descripcion:
        "Jamón, queso, cebolla de verdeo, pimienta y ricota a eleccion.",
    },
    {
      id: 5,
      nombre: "Pizza de Centolla",
      precio: 1300,
      categoria: "Pizza",
      imagen: "https://i.ibb.co/hg0v7qM/pizza.png",
      stock: 7,
      descripcion:
        "Centolla fueguina precocida, cebolla de verdeo, queso y queso azul.",
    },
    {
      id: 6,
      nombre: "Sorrentinos de salmon",
      precio: 1500,
      categoria: "Pasta",
      imagen: "https://i.ibb.co/FYw1N3f/salmon.png",
      stock: 2,
      descripcion:
        "Salmon fueguino cocido al horno, cebolla de verdeo, sal, pimienta.",
    },
    {
      id: 7,
      nombre: "Dulce de membrillo",
      precio: 200,
      categoria: "Dulces",
      imagen: "https://i.ibb.co/RjTH0Y8/membrillo.png",
      stock: 10,
      descripcion: "Dulce de membrillo artesanal.",
    },
    {
      id: 8,
      nombre: "Pan casero",
      precio: 300,
      categoria: "Panificado",
      imagen: "https://i.ibb.co/GPW72nD/pan.png",
      stock: 15,
      descripcion: "Pan casero artesanal.",
    },
  ];
  const tarea = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id == 1) {
        resolve(item.filter((producto) => producto.id === 1));
      } else if (id == 2) {
        resolve(item.filter((producto) => producto.id === 2));
      } else if (id == 3) {
        resolve(item.filter((producto) => producto.id === 3));
      } else if (id == 4) {
        resolve(item.filter((producto) => producto.id === 4));
      } else if (id == 5) {
        resolve(item.filter((producto) => producto.id === 5));
      } else if (id == 6) {
        resolve(item.filter((producto) => producto.id === 6));
      } else if (id == 7) {
        resolve(item.filter((producto) => producto.id === 7));
      } else if (id == 8) {
        resolve(item.filter((producto) => producto.id === 8));
      }
    }, 2000);
  });
  useEffect(() => {
    tarea.then((res) => {
      setdescripcion(res);
      setLoading(false);
    });
  }, []);
  return (
    <div className="container my-5">
      {loading ? <h2>{loading}</h2> : <ItemDetail descripcion={descripcion} />}
    </div>
  );
};

export default ItemDetailContainer;
