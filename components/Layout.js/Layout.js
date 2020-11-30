import React from "react";
import Navbar from "@/components/Navbar/Navbar";

// import styles from "./layout.module.css";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <footer className="container">este es un footer</footer>

      <style jsx>{`
        .container {
          background: salmon;
        }
      `}</style>
    </div>
  );
};

export default Layout;
