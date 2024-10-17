import React from "react";
import styled from "@emotion/styled";
import { Box, Button, Typography } from "@mui/material";

import Form from "./Form";
const Container = styled("div")`
  border: 1px solid black;
  border-radius: 5px;
  width: 774px;
  height: 500px;
  margin-bottom: 10px;
  margin-top: 30px;
  // height: 591px;
`;
const CustomerAddress = ({ address }) => {
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          // border: "1px solid black",
          margin: "8px 40px 0 40px",
          justifyContent: "space-between",
          padding: "15px",
        }}
      >
        <Typography variant="h6">Customer Details</Typography>
        <Button
          variant="outlined"
          color="#A03037"
          style={{ background: "#ffff" }}
        >
          Add New Address
        </Button>
      </Box>
      <Form address={address} />
    </Container>
  );
};

export default CustomerAddress;
