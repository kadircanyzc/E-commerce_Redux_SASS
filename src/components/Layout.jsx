import React from "react";
import Header from "./Header";
import Products from "./Products";

const Layout = () => {


  return (
    <React.Fragment>
      <div className="layout">
        <Header />
        <Products />
      </div>
    </React.Fragment>
  );
};

export default Layout;