import React from "react";
import { Link } from "react-router-dom";

const ShippingTable = () => {
  return (
    <div className="col-md-12 col-lg-8">
      <table className="table">
        <thead>
          <tr>
            <th>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" />
              </div>
            </th>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Estimate</th>
            <th className="text-end">Action</th>
          </tr>
        </thead>
        {/* Table Data */}
        <tbody>
          <tr>
            <td>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" />
              </div>
            </td>
            <td>1</td>
            <td>
              <b>JNE</b>
            </td>
            <td>Rp 50.000</td>
            <td>3 Days</td>
            <td className="text-end">
              <div className="dropdown">
                <Link
                  to="#"
                  data-bs-toggle="dropdown"
                  className="btn btn-light"
                >
                  <i className="fas fa-ellipsis-h"></i>
                </Link>
                <div className="dropdown-menu">
                  <Link className="dropdown-item" to="#">
                    Edit info
                  </Link>
                  <Link className="dropdown-item text-danger" to="#">
                    Delete
                  </Link>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" />
              </div>
            </td>
            <td>2</td>
            <td>
              <b>JNT</b>
            </td>
            <td>Rp 35.000</td>
            <td>5 Days</td>

            <td className="text-end">
              <div className="dropdown">
                <Link
                  to="#"
                  data-bs-toggle="dropdown"
                  className="btn btn-light"
                >
                  <i className="fas fa-ellipsis-h"></i>
                </Link>
                <div className="dropdown-menu">
                  <Link className="dropdown-item" to="#">
                    Edit info
                  </Link>
                  <Link className="dropdown-item text-danger" to="#">
                    Delete
                  </Link>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" />
              </div>
            </td>
            <td>3</td>
            <td>
              <b>SiCepat</b>
            </td>
            <td>Rp 28.000</td>
            <td>6 Days</td>

            <td className="text-end">
              <div className="dropdown">
                <Link
                  to="#"
                  data-bs-toggle="dropdown"
                  className="btn btn-light"
                >
                  <i className="fas fa-ellipsis-h"></i>
                </Link>
                <div className="dropdown-menu">
                  <Link className="dropdown-item" to="#">
                    Edit info
                  </Link>
                  <Link className="dropdown-item text-danger" to="#">
                    Delete
                  </Link>
                </div>
              </div>
            </td>
          </tr>
         
        </tbody>
      </table>
    </div>
  );
};

export default ShippingTable;
