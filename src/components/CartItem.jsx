import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeItem,
  updateQuantity
} from "../redux/CartSlice";

function CartItem() {

  const dispatch = useDispatch();

  const items = useSelector(
    state => state.cart.items
  );

  const total = items.reduce(
    (sum, item) =>
      sum + (item.price * item.quantity),
    0
  );

  const increase = (item) => {

    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity + 1
      })
    );

  };

  const decrease = (item) => {

    if(item.quantity > 1){

      dispatch(
        updateQuantity({
          id: item.id,
          quantity: item.quantity - 1
        })
      );

    }

  };

  return (
    <div>

      <h1>Shopping Cart</h1>

      <h2>Total: ${total}</h2>

      {
        items.map(item => (

          <div key={item.id}>

            <img
              src={item.image}
              width="100"
              alt={item.name}
            />

            <h3>{item.name}</h3>

            <p>
              ${item.price * item.quantity}
            </p>

            <button
              onClick={() =>
                decrease(item)
              }
            >
              -
            </button>

            {item.quantity}

            <button
              onClick={() =>
                increase(item)
              }
            >
              +
            </button>

            <button
              onClick={() =>
                dispatch(removeItem(item.id))
              }
            >
              Delete
            </button>

          </div>

        ))
      }

      <button
        onClick={() =>
          alert("Coming Soon")
        }
      >
        Checkout
      </button>

    </div>
  );
}

export default CartItem;