import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, TextField, Button, styled } from "@mui/material";
import { signup } from "../services/UserService";
import { names, validEmail, validPassword, mobileNumber } from "../Regex/Regex";
const Login = styled("button")`
  width: 350px;
  background-color: #802f34;
  padding: 10px;
  border-radius: 5px;
  color: #ffff;
  font-weigth: 600;
  font-size: 1rem;
  margin-top: 10px;
  border: 1px solid black;
  margin-bottom: 50px;
`;

const SignUp = ({ show, toggle }) => {
  const bg = Boolean(!show);
  // const navigate = useNavigate();

  let isNotValid = false;
  const [value, setValue] = useState({
    fullname: "",
    email: "",
    password: "",
    number: "",
  });
  const [error, setError] = useState({
    nameErr: false,
    nameMsg: "",
    emailErr: false,
    emailMsg: "",
    passwordErr: false,
    passwordMsg: "",
    numberErr: false,
    numberMsg: "",
  });
  //// Handling input
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setValue((pre) => {
      return { ...pre, [name]: value };
    });
  };
  const submitHandler = async () => {
    //// validate Email
    if (validEmail.test(value.email) === false) {
      isNotValid = true;
      setError((pre) => {
        return { ...pre, emailErr: true, emailMsg: "Enter correct email.." };
      });
    } else {
      setError((pre) => {
        return { ...pre, emailErr: false, emailMsg: "" };
      });
    }
    if (!value.email) {
      setError((pre) => {
        return { ...pre, emailErr: true, emailMsg: "Email is required.." };
      });
    }
    // //// validate fullname
    if (names.test(value.fullname) === false) {
      isNotValid = true;
      setError((pre) => {
        return {
          ...pre,
          nameErr: true,
          nameMsg: "only alphabhet are allowed..",
        };
      });
    } else {
      setError((pre) => {
        return { ...pre, nameErr: false, nameMsg: "" };
      });
    }
    if (!value.fullname) {
      setError((pre) => {
        return { ...pre, nameErr: true, nameMsg: "fullName is required.." };
      });
    }
    ///////// validate password
    if (validPassword.test(value.password) === false) {
      isNotValid = true;
      setError((pre) => {
        return {
          ...pre,
          passwordErr: true,
          passwordMsg: "Enter correct password..",
        };
      });
    } else {
      setError((pre) => {
        return { ...pre, passwordErr: false, passwordMsg: "" };
      });
    }
    if (!value.password) {
      setError((pre) => {
        return {
          ...pre,
          passwordErr: true,
          passwordMsg: "Password is required..",
        };
      });
    }

    if (mobileNumber.test(value.number) === false) {
      isNotValid = true;
      setError((pre) => {
        return {
          ...pre,
          numberErr: true,
          numberMsg: "Enter correct credential..",
        };
      });
    } else {
      setError((pre) => {
        return { ...pre, numberErr: false, numberMsg: "" };
      });
    }
    if (!value.number) {
      setError((pre) => {
        return {
          ...pre,
          numberErr: true,
          numberMsg: "mobile number is required..",
        };
      });
    }

    /////////////////
    if (
      !value.email ||
      !value.fullname ||
      !value.password ||
      !value.number ||
      isNotValid
    ) {
      console.log("error");
      return;
    }
    console.log(value);
    await signup(value);
    setValue({ number: "", fullname: "", email: "", password: "" });
  };
  return (
    <>
      {!show && (
        <Box
          sx={{
            height: "100vh",
            width: "100%",
            display: "flex",
            fontFamily: "Roboto;",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "500px",
              height: "auto",
              border: "1px solid black",
              borderRadius: "5px",
            }}
          >
            <header
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textTransform: "uppercase",
                gap: "150px",
                height: "70px",
                fontSize: "1.8rem",
              }}
            >
              <div
                onClick={() => toggle(true)}
                style={{
                  color: !bg ? "#0A0102" : "#878787",
                }}
              >
                Login
              </div>
              <div
                style={{
                  color: bg ? "#0A0102" : "#878787",
                  textDecoration: "underline",
                }}
              >
                SignUp
              </div>
            </header>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                fontSize: "1.2rem",
                gap: "30px",
              }}
            >
              <form
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "30px",
                }}
              >
                {/* For fullName */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "350px",
                  }}
                >
                  <label htmlFor="FullName">Full Name</label>
                  <TextField
                    error={error.nameErr}
                    type="text"
                    name="fullname"
                    value={value.fullname}
                    onChange={(e) => inputHandler(e)}
                    onFocus={() =>
                      setError((pre) => {
                        return { ...pre, nameErr: false, nameMsg: "" };
                      })
                    }
                    helperText={error.nameMsg}
                  />
                </Box>
                {/* For Email */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "350px",

                    //   padding: "18px",
                  }}
                >
                  <label htmlFor="Email">Email Id</label>
                  <TextField
                    error={error.emailErr}
                    type="email"
                    name="email"
                    value={value.email}
                    onChange={(e) => inputHandler(e)}
                    onFocus={() =>
                      setError((pre) => {
                        return { ...pre, emailErr: false, emailMsg: "" };
                      })
                    }
                    helperText={error.emailMsg}
                  />
                </Box>
                {/* For password */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "350px",

                    //   padding: "18px",
                  }}
                >
                  <label htmlFor="password">Password</label>
                  <TextField
                    error={error.passwordErr}
                    type="password"
                    name="password"
                    value={value.password}
                    onChange={(e) => inputHandler(e)}
                    onFocus={() =>
                      setError((pre) => {
                        return { ...pre, passwordErr: false, passwordMsg: "" };
                      })
                    }
                    helperText={error.passwordMsg}
                  />
                </Box>
                {/* For mobile */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "350px",
                  }}
                >
                  <label htmlFor="mobilenumber">Mobile Number</label>
                  <TextField
                    error={error.numberErr}
                    type="number"
                    name="number"
                    value={value.number}
                    onChange={(e) => inputHandler(e)}
                    onFocus={() =>
                      setError((pre) => {
                        return { ...pre, numberErr: false, numberMsg: "" };
                      })
                    }
                    helperText={error.numberMsg}
                  />
                </Box>
              </form>
              <Login onClick={submitHandler}>Signup</Login>
              {/* <Box sx={{ padding: "25px" }}>OR</Box>
            <Box
              sx={{
                display: "flex",
                gap: "140px",
                paddingTop: "10px",
                paddingBottom: "60px",
              }}
            >
              <Button variant="contained">Facebook</Button>
              <Button variant="outlined" style={{ color: "black" }}>
                Google
              </Button>
            </Box> */}
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default SignUp;
