import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  address: [],
  addressFlag: null,
};
// post address
export const sendAddress = createAsyncThunk(
  "address/addAddress",
  async (address) => {
    const details = await axios.post(
      `http://localhost:4000/api/address/addAddress`,
      address
    );

    console.log(details);
    return details;
  }
);

const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {
    showSummary(state, action) {
      state.addressFlag = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(sendAddress.fulfilled, (state, action) => {
      state.address.push(action.payload);
    });
  },
});
export const { showSummary } = addressSlice.actions;
export const AddressSlice = (state) => state.address;
export default addressSlice.reducer;
