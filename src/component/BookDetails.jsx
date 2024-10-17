import React, { useEffect, useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import styled from "@emotion/styled";
import Rating from "./Rating";
import { singleBook } from "../features/BookSlice";
import { cartItem, increment } from "../features/CartSlice";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import SearchBar from "./SearchBar";

const Container = styled("div")`
  width: 1320px;
  height: 100%;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const InnerContainer = styled("div")`
  width: 960px;
  height: 585px;
  //   border: 1px solid black;
`;

const BookDetails = () => {
  let { id } = useParams();
  const [bookDetails, setBookDetails] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartHandler = async (id) => {
    await dispatch(cartItem(id));
    navigate(`/cart/${id}`);
    dispatch(increment());
  };
  useEffect(() => {
    const bookDetails = async () => {
      const { payload } = await dispatch(singleBook(id));
      // console.log(payload);
      setBookDetails(payload);
    };
    bookDetails();
  }, [dispatch, singleBook]);

  return (
    <Container>
      <SearchBar />
      <Box
        sx={{
          display: "flex",
          //   border: "1px solid black",
          width: "960px",
          margin: "20px 0 15px 0",
        }}
      >
        <Typography color="#9D9D9D">Home / {""} </Typography>
        <Typography marginLeft="5px"> Book </Typography>
      </Box>
      <InnerContainer>
        <Box
          sx={{
            display: "flex",
            // border: "1px solid #E4E4E4",
            gap: "60px",
            padding: "10px 0 20px 0",
            // alignItems: "center",
            // marginTop: "20px",
          }}
        >
          {/* Book container */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              border: "1px solid #E4E4E4",
            }}
          >
            <Box
              sx={{
                margin: "30px",
                // marginLeft: "55px",
                // marginTop: "20px",
              }}
            >
              <img src={bookDetails.bookImage} height="350px" width="250px" />
            </Box>
          </Box>
          {/* Book details */}
          <Box
            sx={{
              marginTop: "50px",
            }}
          >
            <Typography variant="h4">{bookDetails.bookName}.</Typography>
            <Typography variant="h6">by {bookDetails.author}</Typography>
            <Rating />
            <Typography variant="h5" marginTop="15px">
              Rs. {bookDetails.price}
            </Typography>
            <hr style={{ width: "600px" }} />
            <Box>
              <Typography
                sx={{
                  // border: "1px solid black",
                  display: "flex",
                  gap: "2px",
                  alignItems: "center",
                  color: "#9D9D9D",
                }}
              >
                <span style={{ fontSize: "2rem" }}>&#x2022;</span>Book Details
              </Typography>
              <Typography style={{ wordBreak: "break-word" }}>
                {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                voluptate similique dolore, nisi fugit ea quam totam
                reprehenderit aperiam beatae harum odio cum repellat eius minima
                eaque numquam aut consequuntur.{" "} */}
                {bookDetails.description}
              </Typography>
            </Box>
            <hr style={{ width: "600px", marginTop: "40px" }} />
          </Box>
        </Box>
        {/* book details */}
        {/*  */}
        <Button
          variant="contained"
          size="large"
          style={{ background: "red", marginRight: "40px" }}
          onClick={() => cartHandler(bookDetails._id)}
        >
          ADD TO BAG
        </Button>
        <Button
          variant="contained"
          size="large"
          style={{ background: "brown" }}
        >
          <span style={{ color: "#ffff", marginRight: "8px" }}>&#9829;</span>
          Wishlist
        </Button>
      </InnerContainer>
    </Container>
  );
};

export default BookDetails;
