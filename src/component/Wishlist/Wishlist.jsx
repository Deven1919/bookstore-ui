import React from "react";
import { Box, Typography, Button } from "@mui/material";
import styled from "@emotion/styled";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
const Container = styled("div")`
  border: 1px solid black;
  width: 1350px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  //   justify-content: center;
`;
const InnerContainer = styled("div")`
  border: 1px solid #e4e4e4;
  border-radius: 5px;
  width: 1022px;
  height: 100%;
`;
const Wishlist = () => {
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          font: " normal normal normal 12px/16px Roboto",
          //   border: "1px solid black",
          width: "1022px",
          marginTop: "30px",
        }}
      >
        <Typography color="#9D9D9D">Home/</Typography>
        <Typography color="#0A0102">My Wishlist</Typography>
      </Box>
      {/*Main container  */}
      <InnerContainer>
        <Box
          sx={{
            // #E4E4E4
            width: "1022px",
            height: "55px",
            border: "4px solid #E4E4E4 ",
            borderRadius: "5px",
            display: "flex",
            background: "#F5F5F5",
          }}
        >
          <Typography variant="h6" sx={{ margin: "10px 0 0 50px" }}>
            My Wishlist (02)
          </Typography>
        </Box>
        {/* book details */}
        <Box
          sx={{
            display: "flex",
            border: "1px solid #E4E4E4",
            gap: "60px",
            padding: "10px 0 20px 0",
            alignItems: "center",
            // marginTop: "20px",
          }}
        >
          {/* Book container */}
          <Box
            sx={{
              marginLeft: "55px",
              marginTop: "20px",
            }}
          >
            <img
              src="https://cdn.venngage.com/template/thumbnail/310/b3895fa3-5dad-4deb-b970-d9a2f2c2e13f.webp"
              alt="booklogo"
              width="75px"
              height="95px"
            />
          </Box>
          {/* Book details */}
          <Box
            sx={{
              marginTop: "15px",
            }}
          >
            <Typography variant="h6">Don't Make Me Think.</Typography>
            <Typography variant="h7">by Steve Krug</Typography>

            <p
              style={{
                fontWeight: "600",
                font: "normal normal bold 16px/18px Lato",
              }}
            >
              Rs. 1500
            </p>
          </Box>
          <DeleteOutlineOutlinedIcon sx={{ marginLeft: "400px" }} />
        </Box>
        {/* book details */}
        {/*  */}
        <Box
          sx={{
            display: "flex",
            border: "1px solid #E4E4E4",
            gap: "60px",
            padding: "10px 0 20px 0",
            alignItems: "center",
            // marginTop: "20px",
          }}
        >
          {/* Book container */}
          <Box
            sx={{
              marginLeft: "55px",
              marginTop: "20px",
            }}
          >
            <img
              src="https://cdn.venngage.com/template/thumbnail/310/b3895fa3-5dad-4deb-b970-d9a2f2c2e13f.webp"
              alt="booklogo"
              width="75px"
              height="95px"
            />
          </Box>
          {/* Book details */}
          <Box
            sx={{
              marginTop: "15px",
            }}
          >
            <Typography variant="h6">Don't Make Me Think.</Typography>
            <Typography variant="h7">by Steve Krug</Typography>

            <p
              style={{
                fontWeight: "600",
                font: "normal normal bold 16px/18px Lato",
              }}
            >
              Rs. 1500
            </p>
          </Box>
          <DeleteOutlineOutlinedIcon sx={{ marginLeft: "400px" }} />
        </Box>
        {/* book details */}
        {/*  */}
        {/*  */}
        <Box
          sx={{
            display: "flex",
            border: "1px solid #E4E4E4",
            gap: "60px",
            padding: "10px 0 20px 0",
            alignItems: "center",
            // marginTop: "20px",
          }}
        >
          {/* Book container */}
          <Box
            sx={{
              marginLeft: "55px",
              marginTop: "20px",
            }}
          >
            <img
              src="https://cdn.venngage.com/template/thumbnail/310/b3895fa3-5dad-4deb-b970-d9a2f2c2e13f.webp"
              alt="booklogo"
              width="75px"
              height="95px"
            />
          </Box>
          {/* Book details */}
          <Box
            sx={{
              marginTop: "15px",
            }}
          >
            <Typography variant="h6">Don't Make Me Think.</Typography>
            <Typography variant="h7">by Steve Krug</Typography>

            <p
              style={{
                fontWeight: "600",
                font: "normal normal bold 16px/18px Lato",
              }}
            >
              Rs. 1500
            </p>
          </Box>
          <DeleteOutlineOutlinedIcon sx={{ marginLeft: "400px" }} />
        </Box>
        {/* book details */}
        {/*  */}
      </InnerContainer>
      {/*  */}
    </Container>
  );
};

export default Wishlist;
