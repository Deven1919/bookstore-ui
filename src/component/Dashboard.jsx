import React from "react";
import { Box, styled } from "@mui/material";
import SearchBar from "./SearchBar";
import Books from "./Books/Books";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import HomeHeader from "./HomeHeader";
const InnerContainer = styled("div")`
  border: 1px solid black;
  width: 1320px;
  height: auto;
`;
const Header = styled("div")`
  width: 1266px;
  height: 60px;
`;
const Img = styled("img")`
  width: 31.04px;
  height: 23.71px;
`;
const Dashboard = () => {
  return (
    <>
      <Box
        sx={{
          height: "100%",
          width: "1366px",

          display: "flex",
          justifyContent: "center",
        }}
      >
        <InnerContainer>
          <Header>
            <SearchBar />
          </Header>
          {/* <HomeHeader /> */}
          {/*       
          <Books /> */}
          <Outlet />
          <Footer />
        </InnerContainer>
      </Box>
    </>
  );
};

export default Dashboard;
