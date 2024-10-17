import { Box, TextField, Button, styled } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/UserService";
const LoginButton = styled("button")`
  width: 350px;
  background-color: #802f34;
  padding: 10px;
  border-radius: 5px;
  color: #ffff;
  font-weigth: 600;
  font-size: 1rem;
  margin-top: 10px;
`;
const validEmail = new RegExp("^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$");
const validPassword = new RegExp("^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$");
const Login = ({ show, toggle }) => {
  let isNotValid = false;
  const navigate = useNavigate();
  const [loggedIn, setIsLoggedIn] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    emailErr: false,
    emailErrMsg: "",
    pwdErrMsg: "",
    pwdError: false,
  });
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setIsLoggedIn((pre) => {
      return { ...pre, [name]: value };
    });
  };
  const submitHandler = async () => {
    if (validEmail.test(loggedIn.email) === false) {
      isNotValid = true;
      setError((pre) => {
        return { ...pre, emailErr: true, emailErrMsg: "Invalid Email." };
      });
    } else {
      setError((pre) => {
        return { ...pre, emailErr: false };
      });
    }
    if (!loggedIn.email) {
      setError((pre) => {
        return { ...pre, emailErr: true, emailErrMsg: "Email required." };
      });
    } else {
      setError((pre) => {
        return { ...pre, emailErr: false };
      });
    }
    ////////////////////////////////////////////////////////////////////////////
    if (validPassword.test(loggedIn.password) === false) {
      isNotValid = true;
      setError((pre) => {
        return { ...pre, pwdError: true, pwdErrMsg: "Invalid Password." };
      });
    } else {
      setError((pre) => {
        return { ...pre, pwdError: false };
      });
    }

    if (!loggedIn.password) {
      setError((pre) => {
        return { ...pre, pwdError: true, pwdErrMsg: "Password required." };
      });
    } else {
      setError((pre) => {
        return { ...pre, pwdError: false };
      });
    }
    ///////////
    if (!loggedIn.email || !loggedIn.password || isNotValid) {
      console.log("Error");

      return;
    } else {
      console.log(loggedIn);
      const user = await login(loggedIn);
      console.log(user);

      navigate("dashboard");
      setIsLoggedIn({
        email: "",
        password: "",
      });
    }
  };
  return (
    <>
      {show && (
        <Box
          sx={{
            border: "2px solid black",
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
                fontFamily: "Roboto",
                fontWeight: "Medium",
              }}
            >
              <div
                style={{
                  color: show ? "#0A0102" : "#878787",
                  textDecoration: "underline",
                }}
              >
                Login
              </div>
              <div
                onClick={() => toggle(false)}
                style={{
                  color: !show ? "#0A0102" : "#878787",
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
              }}
            >
              <form>
                {/* For email */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "350px",
                    padding: "18px",
                  }}
                >
                  <label htmlFor="Email">EmailId</label>
                  <TextField
                    error={error.emailErr}
                    type="text"
                    value={loggedIn.email}
                    name="email"
                    onChange={(e) => inputHandler(e)}
                    onFocus={() =>
                      setError((pre) => {
                        return { ...pre, emailErr: false, emailErrMsg: "" };
                      })
                    }
                    helperText={error.emailErrMsg}
                  />
                </Box>
                {/* For password */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "350px",

                    padding: "18px",
                  }}
                >
                  <label htmlFor="Email">Password</label>
                  <TextField
                    error={error.pwdError}
                    type="password"
                    value={loggedIn.password}
                    name="password"
                    onChange={(e) => inputHandler(e)}
                    onFocus={() =>
                      setError((pre) => {
                        return { ...pre, pwdError: false, pwdErrMsg: "" };
                      })
                    }
                    helperText={error.pwdErrMsg}
                  />
                </Box>
              </form>
              <LoginButton onClick={submitHandler}>Login</LoginButton>
              <Box sx={{ padding: "25px" }}>OR</Box>
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
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default Login;
