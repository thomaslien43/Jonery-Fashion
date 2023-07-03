import React from "react";

const CreateVoucher = () => {
  return (
    <div className="col-md-12 col-lg-4">
      <form>
        <div className="mb-4">
          <label htmlFor="product_name" className="form-label">
            Code
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="form-control"
            id="product_name"
          />
        </div>
        <div className="mb-4">
          <label className="form-label">Minimum Transaction</label>
          <input
            placeholder="Type here"
            className="form-control"
            rows="4"
          ></input>
        </div>
        <div className="mb-4">
          <label className="form-label">Price</label>
          <input
            placeholder="Type here"
            className="form-control"
            rows="4"
          ></input>
        </div>
        <div className="mb-4">
          <label className="form-label">Quantity</label>
          <input
            placeholder="Type here"
            className="form-control"
            rows="4"
          ></input>
        </div>

        <div className="d-grid">
          <button className="btn btn-primary py-3">Create Voucher</button>
        </div>
      </form>
    </div>
  );
};

export default CreateVoucher;
