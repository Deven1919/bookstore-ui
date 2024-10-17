import React from "react";
import { Box } from "@mui/material";
const HomeHeader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "730px",
        padding: "25px",
      }}
    >
      <span
        style={{
          fontSize: "1.6rem",
          display: "block",
          font: "font: normal normal normal 12px/16px Roboto",
        }}
      >
        Books
      </span>
      <select
        style={{
          width: "150px",
          height: "24px",
          color: "#878787",
          fontSize: "0.8rem",
          font: "font: normal normal normal 12px/16px Roboto",
          textAlign: "center",
        }}
      >
        <option value="">Sort by relevance</option>
      </select>
    </Box>
  );
};

export default HomeHeader;
