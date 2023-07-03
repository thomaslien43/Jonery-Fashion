import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="Announcement">
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center display-none">
              <p>+62 000 000</p>
              <p>shop@gmail.com</p>
            </div>
            <div className="col-12 col-lg-6 justify-content-center justify-content-lg-end d-flex align-items-center">
              <Link to="">
                <i className="fab fa-instagram"></i>
              </Link>
              <Link to="">
                <i className="fab fa-facebook"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="col-4 justify-content-center d-flex">
        <h6>Tampil beda dengan Jonery Fashion, since 2021</h6>
      </div>
    </div>
  );
};

export default Footer;
