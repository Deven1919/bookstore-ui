import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  toggle,
  cartItem,
  removeQuantity,
  CartSlice,
  removeBook,
} from "../../features/CartSlice";
import { useNavigate } from "react-router-dom";

const CartButtons = ({ details }) => {
  const dispatch = useDispatch();
  const { cart } = useSelector(CartSlice);
  const navigate = useNavigate();
  const inc = async (book) => {
    console.log(book._id);
    const cart = await dispatch(cartItem(book._id));
    console.log(cart);
    dispatch(increment());
  };

  const dec = async (book) => {
    console.log(book._id);
    const cart = await dispatch(removeQuantity(book._id));
    console.log(cart);
    dispatch(decrement());
  };

  const showDetails = (book) => {
    console.log(book._id);
    console.log(cart);
    dispatch(toggle(true));
    navigate(`/cart/${book._id}`);
  };
  const remove = async (book) => {
    await dispatch(removeBook(book._id));
    dispatch(decrement());
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          // border: "1px solid black",
          marginLeft: "185px",
        }}
      >
        <Button
          style={{
            border: "1px solid black",
            minWidth: "30px",
            height: "30px",
            borderRadius: "100%",
          }}
          onClick={() => dec(details)}
        >
          <span
            style={{
              fontSize: "20px",
              color: "black",
              display: "block",
              paddingLeft: "1px",
            }}
          >
            -
          </span>
        </Button>
        <span
          style={{
            border: "1px solid black",
            padding: "2px 15px 2px 15px",
          }}
        >
          {details.quantity}
        </span>
        <Button
          style={{
            border: "1px solid black",
            minWidth: "30px",
            height: "30px",
            borderRadius: "100%",
          }}
          onClick={() => inc(details)}
        >
          <span
            style={{
              fontSize: "20px",
              color: "black",

              display: "block",
              paddingTop: "2px",
              paddingLeft: "1px",
            }}
          >
            +
          </span>
        </Button>
        <span
          role="button"
          style={{
            color: "#0A0102",
            font: "normal normal normal 16px/15px Lato",
            marginLeft: "20px",
            fontWeight: "500",
          }}
          onClick={() => remove(details)}
        >
          Remove
        </span>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          margin: "0px 40px 0 40px",
        }}
      >
        <Button variant="contained" onClick={() => showDetails(details)}>
          place order
        </Button>
      </Box>
    </>
  );
};

export default CartButtons;
