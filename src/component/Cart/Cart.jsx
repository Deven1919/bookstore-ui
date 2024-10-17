import React, { useCallback, useEffect, useState, useRef } from "react";
import { Box, Button } from "@mui/material";
import CartButtons from "./CartButtons";
import ContainerBar from "./ContainerBar";
import CartSection from "./CartSection";
import Address from "./Address";
import CustomerAddress from "./CustomerAddress";
import Summary from "./Summary";
import styled from "@emotion/styled";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  cartItem,
  CartSlice,
  getCartDetails,
  increment,
} from "../../features/CartSlice";
import { AddressSlice } from "../../features/AddressSlice";
import SearchBar from "../SearchBar";

const Container = styled("div")`
  border: 1px solid black;
  border-radius: 5px;
  width: 774px;
  height: auto;
  margin-top: 100px;
  margin-bottom: 5px;
`;

const Cart = () => {
  // const { cart } = useSelector(CartSlice);
  // const navigate = useNavigate();
  // const { id } = useParams();
  const [cartDetails, setCartDetails] = useState([]);
  const [add, setAdd] = useState("");
  const dispatch = useDispatch();
  const { toggle, count } = useSelector(CartSlice);

  const currLocation = () => {
    //   // `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
    // useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      const { latitude, longitude } = pos.coords;
      console.log(latitude, longitude);
      const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => setAdd(data.address));
    });
    // navigate(`/cart/${id}`);
    // }, []);
  };

  useEffect(() => {
    async function getDetails() {
      const { payload } = await dispatch(getCartDetails());
      const details = payload?.at(0)?.book;
      setCartDetails(details);
    }
    getDetails();
  }, [count]);

  return (
    <>
      <SearchBar />
      <Box
        sx={{
          border: "1px solid black",
          display: "flex",
          justifyContent: "flex-start",
          height: "100%",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box sx={{ border: "" }}>
          <Box
            sx={{
              display: "flex",
              gap: "5px",
              padding: "10px",
              // border: "1px solid black",
              borderRadius: "5px",
              marginTop: "20px",
              marginBottom: "-100px",
            }}
          >
            <span
              style={{
                color: "#9D9D9D",
                font: "normal normal normal 15px/16px Roboto",
              }}
            >
              Home /
            </span>
            <span
              style={{
                color: "#0A0102",
                font: "normal normal normal 15px/16px Roboto",
              }}
            >
              MyCart
            </span>
          </Box>
          <Container>
            <ContainerBar location={currLocation} />
            <CartSection />
            {/* details={cartDetails} */}
            {/* <CartButtons details={cartDetails} /> */}
          </Container>
        </Box>
        {toggle ? (
          <>
            <CustomerAddress address={add} />
          </>
        ) : (
          <Address />
        )}
        <Summary />
        {/* <Summary /> */}
      </Box>
    </>
  );
};

export default Cart;
