import {  collection, serverTimestamp, doc, getDoc} from "firebase/firestore";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import { db } from "../utils/firebaseConfig";
import Form from './Form';



const Cart = () => {
  const Cartctx = useContext(CartContext);
  console.log(Cartctx);
  const buy = () => {
    let itemsBought = Cartctx.cartList.map((item) => ({
      id: item.itemId, 
      title: item.name,
      price: Cartctx.singleTotal(item.id),
      qty: item.qty,
    }));
    let bought = {
      buyer: {
        name: "Paula",
        email: "test@test.com",
        phone: "1234567891",
      },
      date: serverTimestamp(), //Saca la fecha y tiempo del servidor.
      items: itemsBought,
    };

    const createOrder = async () => {
      const newOrder = doc(collection(db, "orders")); //Crea la colección
      await getDoc(newOrder, bought); //Crea nuevo documento
      return newOrder;
    };

    createOrder()
      .then(
        (result) =>
          alert(
            `Felicitaciones!!!
            Tu orden ha sido tomada...
        Con el valor de $${Cartctx.priceTotalAll()}.
        Con el ID "${result.id}".`
          ),
        Cartctx.clear()
      )
      .catch((err) =>
        alert(` 
      No se pudo realizar tu compra... 
      Error: ${err}`)
      );
  };

  return (
    <>
      <div className="list__background">
        <div className="list__container">
          {Cartctx.cartList.map((item) => (
            <div className="obj__div">
              <img src={item.image} alt="" className="obj__img" />
              <p className="obj__nameQty">
                {item.qty} {item.name}
              </p>
              <p className="obj__price">Precio: ${item.price} c/u</p>
              <p className="obj__totalPrice">
                Total: ${Cartctx.singleTotal(item.id)}
              </p>
              <button
                className="obj__remove"
                onClick={() => Cartctx.removeItem(item.name)}
              >
                Eliminar
              </button>

            
              {/* Se envuelve en funcion anonima porque le pasas parametros. */}
            </div>
          ))}
 <div class="obj__divext"> <h2> Cargue por favor sus datos para generar la reserva</h2></div>

<React.StrictMode>
		<div className="obj__div">
			<Form />
		</div>
	</React.StrictMode>
          {Cartctx.cartList.length > 0 ? (
            <div className="list__buttons">
              <button className="list__clear" onClick={Cartctx.clear}>
                Eliminar
              </button>

              <Link to="/">
                <button className="list__add">
                  Sumar productos
                </button>
              </Link>
              <div className="list__pucharse">
                <h1 className="list__total">Total: ${Cartctx.priceTotalAll()}</h1>

                <button className="list__buy" onClick={buy}>
                 Comprar
                </button> 
              </div>
            </div>
          ) : (
            <div className="noCart">
              <p className="noCart__text">
                Actualmente no hay nada en el carrito...
              </p>
              <Link to="/">
                <button className="list__buy">
                  Volver a principal
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;