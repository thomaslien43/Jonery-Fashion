import React from "react";

const CreateCategory = () => {
  return (
    <div className="col-md-12 col-lg-4">
      <form>
        <div className="mb-4">
          <label htmlFor="product_name" className="form-label">
            Name Product
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="form-control py-3"
            id="product_name"
          />
        </div>
        <div className="mb-4">
        <label className="form-label">Category</label>
              <select className="form-select">
                <option>Sling Bag</option>
                <option>Ransel</option>
                <option>Heels</option>
                <option>Flat Shoes</option>
              </select>
            </div>

        <div className="d-grid">
          <button className="btn btn-primary py-3">Create category</button>
        </div>
      </form>
    </div>
  );
};

export default CreateCategory;
