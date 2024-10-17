import React, { useCallback, useEffect, useState, useRef } from "react";
import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  cartItem,
  CartSlice,
  decrement,
  getCartDetails,
  increment,
} from "../../features/CartSlice";

import CartButtons from "./CartButtons";
// { details }
const CartSection = () => {
  const { cart, count } = useSelector(CartSlice);
  // console.log(count);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchCart() {
      await dispatch(getCartDetails());
    }
    fetchCart();
  }, [increment, decrement]);

  return (
    <>
      {cart.map((curr) => (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            border: " 1px  solid black",
            borderTop: "none",
            borderLeft: "none",
            borderRight: "none",

            // marginTop: "-10px",
            padding: "10px 0 15px 0",
          }}
          key={curr._id}
        >
          {/* Book container */}
          <Box sx={{ display: "flex", gap: "60px" }}>
            {/* Both book and info */}
            <Box
              sx={{
                marginLeft: "55px",
                marginTop: "20px",
              }}
            >
              <img
                src={curr.bookImage}
                alt="booklogo"
                width="75px"
                height="95px"
              />
            </Box>
            {/* Book details */}
            {/* sx={{ marginTop: "15px" }} */}
            <Box sx={{ marginTop: "15px" }}>
              <Typography variant="h6">{curr.bookName}.</Typography>
              <Typography variant="h7">by {curr.author}</Typography>

              <p
                style={{
                  fontWeight: "600",
                  font: "normal normal bold 16px/18px Lato",
                }}
              >
                Rs. {curr.totalPrice}
              </p>
            </Box>
          </Box>

          <CartButtons details={curr} />
        </Box>
      ))}
    </>
  );
};

export default CartSection;
{
  /* <Box
  sx={{
    display: "flex",
    //border: "1px solid black",
    gap: "60px",
    alignItems: "center",
    marginTop: "-10px",
  }}
>
  {/* Book container */
}
//   <Box sx={{ marginLeft: "55px", marginTop: "20px" }}>
//     <img
//       src="https://cdn.venngage.com/template/thumbnail/310/b3895fa3-5dad-4deb-b970-d9a2f2c2e13f.webp"
//       alt="booklogo"
//       width="75px"
//       height="95px"
//     />
//   </Box>
//   {/* Book details */}
//   <Box sx={{ marginTop: "15px" }}>
//     <Typography variant="h6">Don't Make Me Think.</Typography>
//     <Typography variant="h7">by Steve Krug</Typography>

//     <p
//       style={{
//         fontWeight: "600",
//         font: "normal normal bold 16px/18px Lato",
//       }}
//     >
//       Rs. 1500
//     </p>
//   </Box>
// </Box>; */}
////////////////////////////////////////

// <Box
//   sx={{
//     marginLeft: "55px",
//     // marginTop: "20px",
//   }}
// >
//   <img src={curr.bookImage} alt="booklogo" width="75px" height="95px" />
// </Box>;
// {
//   /* Book details */
// }
// {
//   /* sx={{ marginTop: "15px" }} */
// }
// <Box>
//   <Typography variant="h6">{curr.bookName}.</Typography>
//   <Typography variant="h7">by {curr.author}</Typography>

//   <p
//     style={{
//       fontWeight: "600",
//       font: "normal normal bold 16px/18px Lato",
//     }}
//   >
//     Rs. {curr.price}
//   </p>
// </Box>;
