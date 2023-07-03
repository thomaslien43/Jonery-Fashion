import React from "react";
import Header from "../components/Header";

const AboutUs = () => {
  return (
    <>
      <Header />
      <div className="about">
        <div className="container ">
          <div className="col-md">
            <div className=" bg-light p-5 text-center shadow-sm rounded">
              <h1>JONERY FASHION</h1>
              <div className=" mt-4 alert alert-warning rounded justify-content-center">
                Jonery Fashion merupakan brand yang didirikan pada tahun 2021
                yang menjual berbagai macam produk-produk fashion untuk wanita
                seperti tas, sepatu, heels dan flatshoes. Dengan prioritas
                kepuasan konsumen, Jonery Fashion selalu memasarkan
                produk-produk yang berkualitas dengan harga terjangkau.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
