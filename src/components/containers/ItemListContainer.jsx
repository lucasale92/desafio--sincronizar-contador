import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList";
import Spinnerner from "react-bootstrap/Spinner";

function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoria } = useParams();

  //Productos
  const listado = [
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
      if (categoria === "Pastas") {
        resolve(listado.filter((producto) => producto.categoria === "Pastas"));
      } else if (categoria === "Pizza") {
        resolve(listado.filter((producto) => producto.categoria === "Pizza"));
      } else if (categoria === "Dulces") {
        resolve(listado.filter((producto) => producto.categoria === "Dulces"));
      } else if (categoria === "Panificado") {
        resolve(
          listado.filter((producto) => producto.categoria === "Panificado")
        );
      } else {
        resolve(listado);
      }
    }, 2000);
  });
  useEffect(() => {
    setLoading(true);
    tarea.then((res) => {
      setProductos(res);
      setLoading(false);
    });
  }, [categoria]);

  return (
    <>
      {loading ? (
        <div className="text-center">
          Cargando...
          <Spinnerner animation="grow" />
        </div>
      ) : (
        <ItemList productos={productos} />
      )}
    </>
  );
}

export default ItemListContainer;
