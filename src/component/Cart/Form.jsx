import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { TextField, Box, Button } from "@mui/material";
import { TextareaAutosize as BaseTextareaAutosize } from "@mui/base/TextareaAutosize";
import { useDispatch, useSelector } from "react-redux";
import { currentLocationSlice } from "../../features/LocationSlice";
import { useNavigate, useParams } from "react-router-dom";
import {
  AddressSlice,
  sendAddress,
  showSummary,
} from "../../features/AddressSlice";

const blue = {
  100: "#DAECFF",
  200: "#b6daff",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  900: "#003A75",
};

const grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025",
};

const Textarea = styled(BaseTextareaAutosize)(
  ({ theme }) => `
    box-sizing: border-box;
    width: 451px;
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 8px 12px;
    border-radius: 8px;
    
  `
);

const Container = styled("div")`
  // border: 1px solid black;
  margin: 0 80px 0 68px;
  padding: 20px 20px 0 0;
`;
const Form = ({ address }) => {
  const { city, neighbourhood, state } = address;

  const dispatch = useDispatch();
  // console.log(address);
  const [value, setValue] = useState({
    fullName: "",
    address: "",
    mobileNumber: "",
    city: "",
    state: "",
  });
  const inputHandler = (e) => {
    const { name, value } = e.target;

    setValue((pre) => {
      return { ...pre, [name]: value };
    });
  };
  const submitHandler = async () => {
    if (
      !value.fullName ||
      !value.address ||
      !value.mobileNumber ||
      !value.city ||
      !value.state
    ) {
      console.log("error");
    } else {
      await dispatch(
        sendAddress({
          fullName: value.fullName,
          mobileNumber: value.mobileNumber,
          address: [
            {
              addressDetails: value.address,
              state: value.state,
              city: value.city,
            },
          ],
        })
      );
      dispatch(showSummary(true));
      console.log(value);
      setValue({
        fullName: "",
        address: "",
        mobileNumber: "",
        city: "",
        state: "",
      });
    }
  };
  useEffect(() => {
    console.log("render");
  }, []);

  return (
    <>
      <Container>
        <form>
          <Box
            sx={{
              // border: "2px solid red",
              display: "flex",
              gap: "20px",
              width: "451px",

              color: "#0A0102",
              font: " normal normal normal 15px/16px Roboto",
            }}
          >
            {/*  */}
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <label>FullName</label>
              <TextField
                name="fullName"
                value={value.fullName}
                onChange={inputHandler}
                type="text"
              />
            </Box>
            {/*  */}
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <label>Mobile Number</label>
              <TextField
                name="mobileNumber"
                value={value.mobileNumber}
                onChange={inputHandler}
                type="number"
              />
            </Box>
            {/*  */}
          </Box>
          {/* textarea */}
          <Box
            sx={{
              // border: "1px solid black",
              display: "flex",
              flexDirection: "column",
              marginTop: "20px",
              // marginLeft: "80px",
            }}
          >
            <label>Address</label>
            <Textarea
              aria-label="minimum height"
              minRows={3}
              placeholder="Enter address here.."
              name="address"
              defaultValue={neighbourhood}
              value={value.address}
              onChange={inputHandler}
              type="text"
            />
          </Box>
          {/* city & state */}
          <Box sx={{ display: "flex", gap: "20px", marginTop: "20px" }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <label>city/town</label>
              <TextField
                name="city"
                defaultValue={city}
                value={value.city}
                onChange={inputHandler}
                type="text"
              />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <label>state</label>
              <TextField
                name="state"
                defaultValue={state}
                value={value.state}
                onChange={inputHandler}
                type="text"
                autoComplete="state"
              />
            </Box>
          </Box>
        </form>
      </Container>
      <Box
        sx={{
          // border: "1px solid black",
          margin: "0 50px 0 50px",

          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Button variant="contained" size="large" onClick={submitHandler}>
          Continue
        </Button>
      </Box>
    </>
  );
};

export default Form;
