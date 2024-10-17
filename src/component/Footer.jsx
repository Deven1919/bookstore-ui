import styled from "@emotion/styled";
import React from "react";
import { Typography } from "@mui/material";
const Container = styled("div")`
  width: 1288px;
  height: 20px;
  padding: 15px;
  border: 1px solid black;
  background-color: black;
  color: #ffff;
  display: flex;
  justify-content: center;
`;
const Footer = () => {
  return (
    <Container>
      <Typography variant="h7">
        Copyright &copy; 2024. Bookstore Private Limited. All Rights Reserved
      </Typography>
    </Container>
  );
};

export default Footer;
