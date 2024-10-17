import { Button, Box, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  currentLocation,
  currentLocationSlice,
} from "../../features/LocationSlice";
import { CartSlice } from "../../features/CartSlice";
const ContainerBar = ({ location, details }) => {
  const { cart } = useSelector(CartSlice);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        // gap: "-20px",
        font: "normal normal medium 18px/24px Roboto",
        color: "#0A0102",
        padding: "10px",
        margin: "0 15px 0 40px",
      }}
    >
      <Typography variant="h6">My cart ({cart.length})</Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          color: "#0A0102",

          //   marginLeft: "40px",
        }}
      >
        <img
          src="https://media.istockphoto.com/id/1493681761/vector/orange-colored-map-location-pin.jpg?s=612x612&w=0&k=20&c=pzksh7tO6k6mXns2YUUuDxA6cVFfE1mQPoNHqSHPbfI="
          alt="location logo"
          width="30px"
          height="30px"
        />

        <Button variant="text" color="#0A0102" onClick={location}>
          <Typography variant="h6"> Use Current location</Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default ContainerBar;
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
