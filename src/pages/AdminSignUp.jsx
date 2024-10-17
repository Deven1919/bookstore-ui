import React, { useState } from "react";
import { Box, TextField, Button, styled } from "@mui/material";
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

const Admin = ({ show, toggle, color }) => {
  const bg = Boolean(!show);
  let isNotValid = false;
  const [value, setValue] = useState({
    fullname: "",
    email: "",
    password: "",
    role: "",
  });
  const [error, setError] = useState({
    nameErr: false,
    nameMsg: "",
    emailErr: false,
    emailMsg: "",
    passwordErr: false,
    passwordMsg: "",
    roleErr: false,
    roleMsg: "",
  });
  //// Handling input
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setValue((pre) => {
      return { ...pre, [name]: value };
    });
  };
  const submitHandler = () => {
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

    if (names.test(value.role) === false) {
      isNotValid = true;
      setError((pre) => {
        return {
          ...pre,
          roleErr: true,
          roleMsg: "Enter correct credential..",
        };
      });
    } else {
      setError((pre) => {
        return { ...pre, roleErr: false, roleMsg: "" };
      });
    }
    if (!value.role) {
      setError((pre) => {
        return {
          ...pre,
          roleErr: true,
          roleMsg: "role is required..",
        };
      });
    }

    /////////////////
    if (
      !value.email ||
      !value.fullname ||
      !value.password ||
      !value.role ||
      isNotValid
    ) {
      console.log("error");
      return;
    }
    console.log(value);
    setValue({ role: "", fullname: "", email: "", password: "" });
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
              {/* <div
                onClick={() => toggle(true)}
                style={{
                  color: !bg ? "#0A0102" : "#878787",
                }}
              >
                Login
              </div> */}
              <div
                style={{
                  color: "#878787",
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
                  <label htmlFor="mobilenumber">User Role</label>
                  <TextField
                    error={error.roleErr}
                    type="text"
                    name="role"
                    value={value.role}
                    onChange={(e) => inputHandler(e)}
                    onFocus={() =>
                      setError((pre) => {
                        return { ...pre, roleErr: false, roleMsg: "" };
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

export default Admin;
