import React from "react";
import { Typography } from "@mui/material";
import styled from "@emotion/styled";
const Container = styled("div")`
  border: 1px solid black;
  width: 774px;
  height: 70px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  margin-top: 20px;
`;
const Address = () => {
  return (
    <>
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
          Address Details
        </Typography>
      </Container>
    </>
  );
};

export default Address;
