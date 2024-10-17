import React from "react";
import { Box } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
const Rating = () => {
  return (
    <Box
      sx={{
        border: "1px solid black",
        display: "flex",
        width: "50px",
        alignItems: "center",
        background: "#388E3C",
        borderRadius: "2px",
        color: "#ffff",
        marginTop: "5px",
      }}
    >
      <span style={{ marginLeft: "8px" }}>4.5 </span>
      <StarIcon
        style={{
          width: "25px",
          height: "15px",
          marginRight: "5px",
        }}
      />
      <span style={{ color: "gray" }}> (20)</span>
    </Box>
  );
};

export default Rating;
