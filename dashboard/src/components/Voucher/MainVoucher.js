import React from "react";
import CreateVoucher from "./CreateVoucher";
import VoucherTable from "./VoucherTable";

const MainVoucher = () => {
  return (
    <section className="content-main">
      <div className="content-header">
        <h2 className="content-title">Voucher</h2>
      </div>

      <div className="card shadow-sm">
        <div className="card-body">
          <div className="row">
            {/* Create Voucher */}
            <CreateVoucher />
            {/* Voucher table */}
            <VoucherTable />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainVoucher;
