import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const SlideCard = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: (dots) => {
      return <ul style={{ margin: "0px" }}>{dots}</ul>;
    },
  };
  return (
    <>
      <Slider {...settings}>
        <div className="box d_flex top">
          <div className="left">
            <h1>Nama Produk</h1>
            <p>Deskripsi produk</p>
            <button className="btn-primary">Visit Collections</button>
          </div>
          <div className="right">
            <img src="/gambar/AYUMI/6.jpg" alt="ayumi" />
          </div>
        </div>
        <div className="box d_flex top">
          <div className="left">
            <h1>Nama Produk</h1>
            <p>Deskripsi produk</p>
            <button className="btn-primary">Visit Collections</button>
          </div>
          <div className="right">
            <img src="/gambar/AYUMI/5.jpg" alt="ayumi" />
          </div>
        </div>
        <div className="box d_flex top">
          <div className="left">
            <h1>Nama Produk</h1>
            <p>Deskripsi produk</p>
            <button className="btn-primary">Visit Collections</button>
          </div>
          <div className="right">
            <img src="/gambar/AYUMI/4.jpg" alt="ayumi" />
          </div>
        </div>
      </Slider>
    </>
  );
};

export default SlideCard;
