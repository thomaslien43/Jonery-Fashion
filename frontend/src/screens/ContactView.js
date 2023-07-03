import React from "react";
import Header from "../components/Header";

const Contact = () => {
  return (
    <>
      <Header />
      <div className="contact">
        <div className="container f-flex">
          <div className="col-md-6">
            <h2>Kritik dan saran, silakan hubungi :</h2>
            <div className="card col-md-5 mt-3">
              <div className="card-body bg-light shadow-rounded">
                <h3>WhatsApp</h3>
                <span>+62 123-4567-8900</span>
              </div>
            </div>
            <div className="card col-md-5 mt-5">
              <div className="card-body bg-light shadow-rounded">
                <h3>Email</h3>
                <span>Admin@contoh.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
