import React from "react";
import { Box, Typography, Button } from "@mui/material";
import styled from "@emotion/styled";
import { replace, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CartSlice, decrement, removeBook } from "../../features/CartSlice";
import { AddressSlice } from "../../features/AddressSlice";
const Container = styled("div")`
  border: 1px solid black;
  width: 774px;
  height: 70px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  margin-top: 30px;
`;
const Order = styled("div")`
  width: 774px;
  height: 237px;
  border: 1px solid black;
  border-radius: 5px;
  margin-top: 30px;
`;
const Summary = () => {
  const { id } = useParams();
  const { cart } = useSelector(CartSlice);
  const dispatch = useDispatch();
  const { addressFlag } = useSelector(AddressSlice);
  const navigate = useNavigate();
  const details = cart.filter((curr) => curr._id === id);
  const finalPage = async () => {
    await dispatch(removeBook(id));
    dispatch(decrement());
    navigate("/order", { replace: true });
  };
  return (
    <>
      {addressFlag ? (
        <>
          {details.map((curr) => (
            <Order key={curr._id}>
              <Typography
                variant="h6"
                sx={{ margin: " 15px 0 0 50px", color: "#333232" }}
              >
                Order summery
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  // border: "1px solid black",
                  gap: "60px",
                  alignItems: "center",
                  marginTop: "10px",
                }}
              >
                {/* Book container */}
                <Box sx={{ marginLeft: "55px", marginTop: "20px" }}>
                  <img
                    src={curr.bookImage}
                    alt="booklogo"
                    width="75px"
                    height="95px"
                  />
                </Box>
                {/* Book details */}
                <Box sx={{ marginTop: "15px" }}>
                  <Typography variant="h6">{curr.bookName}</Typography>
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
              <Box
                sx={{
                  margin: "0 40px 0 10px",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <Button variant="contained" size="large" onClick={finalPage}>
                  CheckOut
                </Button>
              </Box>
            </Order>
          ))}
        </>
      ) : (
        <Container>
          <Typography
            variant="h6"
            color="#333232"
            sx={{
              // border: "1px solid black",
              padding: "10px",
              marginLeft: "40px",
            }}
          >
            Order Summery
          </Typography>
        </Container>
      )}
    </>
  );
};

export default Summary;
//  <Order>
//           <Typography
//             variant="h6"
//             sx={{ margin: " 15px 0 0 50px", color: "#333232" }}
//           >
//             Order summery
//           </Typography>
//           <Box
//             sx={{
//               display: "flex",
//               // border: "1px solid black",
//               gap: "60px",
//               alignItems: "center",
//               marginTop: "10px",
//             }}
//           >
//             {/* Book container */}
//             <Box sx={{ marginLeft: "55px", marginTop: "20px" }}>
//               <img
//                 src="https://cdn.venngage.com/template/thumbnail/310/b3895fa3-5dad-4deb-b970-d9a2f2c2e13f.webp"
//                 alt="booklogo"
//                 width="75px"
//                 height="95px"
//               />
//             </Box>
//             {/* Book details */}
//             <Box sx={{ marginTop: "15px" }}>
//               <Typography variant="h6">{details[0].bookName}</Typography>
//               <Typography variant="h7">by {details[0].author}</Typography>

//               <p
//                 style={{
//                   fontWeight: "600",
//                   font: "normal normal bold 16px/18px Lato",
//                 }}
//               >
//                 Rs. 1500
//               </p>
//             </Box>
//           </Box>
//           <Box
//             sx={{
//               margin: "0 40px 0 10px",
//               display: "flex",
//               justifyContent: "flex-end",
//             }}
//           >
//             <Button variant="contained" size="large">
//               CheckOut
//             </Button>
//           </Box>
//         </Order>
