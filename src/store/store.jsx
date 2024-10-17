import { configureStore } from "@reduxjs/toolkit";
import allBooks from "../features/BookSlice";
import cartItem from "../features/CartSlice";
import currLocation from "../features/LocationSlice";
import addressSlice from "../features/AddressSlice";

const store = configureStore({
  reducer: {
    book: allBooks,
    cart: cartItem,
    location: currLocation,
    address: addressSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export default store;
