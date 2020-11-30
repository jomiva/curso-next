import React from "react";
import Navbar from "../Navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <footer>este es un footer</footer>
    </div>
  );
};

export default Layout;
