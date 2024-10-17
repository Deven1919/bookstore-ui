import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { configure } from "../services/BookServices";
import { key, token } from "../Regex/Regex";
import axios from "axios";

// Initial state
const initialState = {
  cart: [],
  count: 0,
  toggle: null,
  status: "idle", // loading status
  error: null,
};
// create cart
export const cartItem = createAsyncThunk("cart/createCart", async (id) => {
  const item = await axios.post(
    `http://localhost:4000/api/cart/createCart/${id}`,
    JSON.parse(localStorage.getItem(token)),
    configure()
  );

  return item.data.data;
});
////// remove from cart
export const removeQuantity = createAsyncThunk("dec/remove", async (id) => {
  const item = await axios.post(
    `http://localhost:4000/api/cart/removeBook/${id}`,
    JSON.parse(localStorage.getItem(token)),
    configure()
  );
  // console.log(item.data.data);
  const [details] = item.data.data;
  // console.log(details.book);
  return item.data.data;
});

// get cart details
export const getCartDetails = createAsyncThunk("cart/getCart", async () => {
  const item = await axios.get(`http://localhost:4000/api/cart/getCart`);
  // console.log(item.data.data);
  const [details] = item.data.data;
  // console.log(details.book);
  return details.book;
});
/////////////////////
//Delete book from cart

export const removeBook = createAsyncThunk("cart/removeBook", async (id) => {
  const item = await axios.patch(
    `http://localhost:4000/api/cart/deleteBook/${id}`,
    JSON.parse(localStorage.getItem(token)),
    configure()
  );
  console.log(item);
  return item.data.data;

  // console.log(item.data.data);

  // return item.data.data;
});

// // Create slice
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Non-async operations can be handled here if needed
    toggle(state, action) {
      state.toggle = action.payload;
    },
    increment(state, action) {
      state.count++;
    },
    decrement(state, action) {
      console.log("inside decrement");
      state.count--;
    },
  },
  extraReducers: (builder) => {
    // Handle async actions
    builder
      .addCase(cartItem.fulfilled, (state, action) => {
        // state.cart.push(action.payload);
      })
      .addCase(getCartDetails.pending, (state, action) => {
        state.status = "Loading";
      })
      .addCase(getCartDetails.fulfilled, (state, action) => {
        state.cart = action.payload;
        state.status = "succeeded";
      })
      .addCase(getCartDetails.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(removeQuantity.fulfilled, (state, action) => {
        // state.error = action.payload;
      })
      .addCase(removeBook.fulfilled, (state, action) => {
        // state.error = action.payload;
      });
  },
});

// // Export reducer for store configuration
export const { toggle, increment, decrement } = cartSlice.actions;

export default cartSlice.reducer;
export const CartSlice = (state) => state.cart;
