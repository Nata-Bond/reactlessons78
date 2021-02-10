import React from "react";
import Header from "./Header";

const styles = {
  maxWidth: 1170,
  marginLeft: "auto",
  marginRight: "auto",
  paddingRight: 12,
  paddingLeft: 12,
};

const Layout = ({ children }) => (
  <div style={styles}>
    <Header />
    <hr />
    {children}
  </div>
);

export default Layout;
