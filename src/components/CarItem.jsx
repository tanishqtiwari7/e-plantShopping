import React from "react";

function CartItem() {
  return (
    <div>
      <h1>Shopping Cart</h1>

      <div>
        <img
          src="https://images.unsplash.com/photo-1463936575829-25148e1db1b8"
          width="120"
          alt="plant"
        />

        <h3>Snake Plant</h3>

        <p>Price: $20</p>

        <p>Quantity: 1</p>

        <button>-</button>
        <button>+</button>
        <button>Delete</button>
      </div>

      <h2>Total: $20</h2>

      <button>Coming Soon</button>

      <button>Continue Shopping</button>
    </div>
  );
}

export default CartItem;