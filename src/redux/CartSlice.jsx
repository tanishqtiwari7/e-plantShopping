import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalItems: 0
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;

      state.cartItems.push({
        ...product,
        quantity: 1
      });

      state.totalItems += 1;
    },

    incrementQuantity: (state, action) => {
      const item = state.cartItems.find(
        x => x.id === action.payload
      );

      if (item) {
        item.quantity += 1;
        state.totalItems += 1;
      }
    },

    decrementQuantity: (state, action) => {
      const item = state.cartItems.find(
        x => x.id === action.payload
      );

      if (item && item.quantity > 1) {
        item.quantity -= 1;
        state.totalItems -= 1;
      }
    },

    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        x => x.id !== action.payload
      );
    }
  }
});

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart
} = cartSlice.actions;

export default cartSlice.reducer;