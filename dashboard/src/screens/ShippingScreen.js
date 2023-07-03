import React from "react";
import Sidebar from "./../components/sidebar";
import Header from "./../components/Header";
import MainShipping from "../components/Shipping/MainShipping";

const ShippingScreen = () => {
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        <MainShipping />
      </main>
    </>
  );
};

export default ShippingScreen;
