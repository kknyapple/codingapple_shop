import React from "react";
import { Outlet } from "react-router-dom";
function About() {
  return (
    <>
      <div>About</div>
      <Outlet></Outlet>
    </>
  );
}

export default About;
