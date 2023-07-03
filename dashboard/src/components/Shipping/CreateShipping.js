import React from "react";

const CreateShipping = () => {
  return (
    <div className="col-md-12 col-lg-4">
      <form>
        <div className="mb-4">
          <label htmlFor="product_name" className="form-label">
            Name
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="form-control"
            id="product_name"
          />
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
          <label className="form-label">Estimate</label>
          <input
            placeholder="Type here"
            className="form-control"
            rows="4"
          ></input>
        </div>
        <div className="d-grid">
          <button className="btn btn-primary py-3">Create Shipping</button>
        </div>
      </form>
    </div>
  );
};

export default CreateShipping;
