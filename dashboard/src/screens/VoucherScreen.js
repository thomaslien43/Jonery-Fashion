import React from "react";
import Sidebar from "./../components/sidebar";
import Header from "./../components/Header";
import MainVoucher from "../components/Voucher/MainVoucher";

const VoucherScreen = () => {
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        <MainVoucher />
      </main>
    </>
  );
};

export default VoucherScreen;
