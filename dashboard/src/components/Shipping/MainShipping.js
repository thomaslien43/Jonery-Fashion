import React from "react";
import CreateVoucher from "./CreateShipping";
import VoucherTable from "./ShippingTable";
import CreateShipping from "./CreateShipping";
import ShippingTable from "./ShippingTable";

const MainShipping = () => {
  return (
    <section className="content-main">
      <div className="content-header">
        <h2 className="content-title">Shipping</h2>
      </div>

      <div className="card shadow-sm">
        <div className="card-body">
          <div className="row">
            {/* Create shipping */}
            <CreateShipping />
            {/* shipping table */}
            <ShippingTable />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainShipping;
