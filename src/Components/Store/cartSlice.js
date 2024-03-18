import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice(
  
  {
  name: "cart",
  initialState: {
    items: [],
    totalQty: 0,
    totalPrice: 0,
    indQ: [],
  },

  reducers: {
    addItem: (state, action) => {
      const checkIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (checkIndex >= 0) {
        state.items[checkIndex] = {
          ...state.items[checkIndex],
          quantity: state.items[checkIndex].quantity + 1,
        };
      } else {
        // let firstPush = { ...action.payload,qnty:1 };
        let firstPush = { ...action.payload, quantity: 1 };

        // console.log(firstPush.price + " before First");

        state.items.push(firstPush);

        // console.log(state.items[checkIndex].price);
      }

      state.totalQty = state.items
        .map((index) => index.quantity)
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
      // console.log(state.totalQty + "  :  :rtjfdijfdk ::::::::::::: total");
      // state.items.push(action.payload);
      state.items.map((index) => index.price * index.quantity);

      state.totalPrice = state.items
        .map((index) => index.price * index.quantity)
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    },
    removeItem: (state, action) => {
      state.items.map((item) => {
        if (item.id == action.payload.id) {
          const newItem = state.items.filter((index) => index.id !== item.id);
          state.items = newItem;
        }
      });
      state.items.filter((index) => index !== action.payload.id);
      // console.log(action.payload.id);
      state.totalQty = state.items
        .map((index) => index.quantity)
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
      state.totalPrice = state.items
        .map((index) => index.price * index.quantity)
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    },
    clearCart: (state) => {
      state.items.length = 0;
      state.totalQty = 0;
      state.totalPrice=0;
    },

    increaseCart: (state, action) => {
      state.totalQty = state.totalQty + 1;
      const checkIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      state.items[checkIndex] = {
        ...state.items[checkIndex],
        quantity: state.items[checkIndex].quantity + 1,
      };
      state.totalPrice = state.items
        .map((index) => index.price * index.quantity)
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    },
    decreaseCart: (state, action) => {
      const checkIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.items[checkIndex].quantity > 0) {
        state.items[checkIndex] = {
          ...state.items[checkIndex],
          quantity: Math.max(state.items[checkIndex].quantity - 1, 0),
        };

        state.totalQty = Math.max(state.totalQty - 1, 0);

      }
      /////--------------------------logic--with exp and checking---->//
      if(state.items[checkIndex].quantity == 0){
        state.items.map((item) => {
          if (item.id == action.payload.id) {
            const newItem = state.items.filter((index) => index.id !== item.id);
            state.items = newItem;
          }
        });
        state.items.filter((index) => index !== action.payload.id);
      }

      state.totalPrice = state.items
        .map((index) => index.price * index.quantity)
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    },
    // --------------------logic built here--------------------
    // totalPrice: (state) => {
    //   state.totalPrice = state.items
    //     .map((index) => index.price * index.quantity)
    //     .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    //   console.log(state.totalPrice);
    // },
  },
});

export const { addItem, removeItem, clearCart, increaseCart, decreaseCart } =
  cartSlice.actions;
export default cartSlice.reducer;
