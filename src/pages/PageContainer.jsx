import React from "react";
import { useState } from "react";
import SignUp from "./SignUp";
import Login from "./Login";
const PageContainer = () => {
  const [toggle, setToggle] = useState(false);

  const toggleHandler = (value) => {
    setToggle(value);
  };
  return (
    <div>
      <Login toggle={toggleHandler} show={toggle} />
      <SignUp show={toggle} toggle={toggleHandler} />
    </div>
  );
};

export default PageContainer;
