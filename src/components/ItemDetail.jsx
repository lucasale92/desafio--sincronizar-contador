import React from "react";
import ItemCount from "./ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const ItemDetail = ({ descripcion }) => {
const [vistaContador, setVistaContador] = useState(true);
 const onAdd = (count) => {
  setVistaContador(false);
}
  return (
    <>
      {descripcion.map((item) => (
        <>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12 p-2 text-center">
              <img src={item.imagen} alt="imagen" />
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <h2 className="detail-nombre">{item.nombre}</h2>
              <p className="detail-precio">Precio: $ {item.precio}</p>
              <p className="detail-detalle">Descripcion: {item.descripcion}</p>
              <p className="detail-details">Stock disponible: {item.stock}</p>
              {vistaContador ? <ItemCount inicial={1} stock={11} onAdd={onAdd} /> 
              : 
              <>
                <Link to ={"/cart"}><Button variant="success" size="lg">Ir al Carrito</Button>{' '}</Link>
                <Link to = {"/"}><Button variant="danger" size="lg">Seguir comprando</Button>{' '}</Link>
              </>
              }
            </div>
          </div>
        </>
      ))}
    </>
  );
};
export default ItemDetail;
