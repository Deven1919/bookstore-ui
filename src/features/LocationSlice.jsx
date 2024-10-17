import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Initial state
const initialState = {
  location: [],
  status: "idle",
  error: null,
};
// create cart
export const currentLocation = createAsyncThunk(
  "location/currentLocation",
  async () => {
    navigator.geolocation.getCurrentPosition(async (pos) => {
      const { latitude, longitude } = pos.coords;
      //  console.log(latitude, longitude);
      const url = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
      );
      const res = await url.json();
      console.log(res);
      return res;
    });
  }
);

// // Create slice
const LocationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Handle async actions
    builder
      .addCase(currentLocation.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(currentLocation.fulfilled, (state, action) => {
        state.location.push(action.payload);
      })
      .addCase(currentLocation.rejected, (state, action) => {
        state.error = action.payload.error;
      });
  },
});

// // Export reducer for store configuration
// export const { increment, decrement } = cartSlice.actions;
export const currentLocationSlice = (state) => state.location;
export default LocationSlice.reducer;
// export const CartSlice = (state) => state.cart;
// function GetCurrentAddress() {
//   const [add, setAdd] = useState("");
//   // `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`

//   useEffect(() => {
//     navigator.geolocation.getCurrentPosition((pos) => {
//       const { latitude, longitude } = pos.coords;
//       console.log(latitude, longitude);
//       const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
//       fetch(url)
//         .then((res) => res.json())
//         .then((data) => setAdd(data.address));
//     });
//   }, []);
//   console.log(add, "sfsfh");
//   return (
//     <>
//       <p>road : {add.road}</p>
//       <p>city : {add.city}</p>
//       <p>country :{add.country}</p>
//     </>
//   );
// }
