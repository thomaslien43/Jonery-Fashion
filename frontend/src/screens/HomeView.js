import React from "react";
import Shop from "./../components/homeComponents/Shop";
import CalltoAction from "./../components/homeComponents/CalltoAction";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import Header from './../components/Header';

const HomeView = ({ match }) => {
    window.scrollTo(0, 0);
    const keyword = match.params.keyword;
    const pagenumber = match.params.pagenumber;
    return(
        <div>
            <Header />
            <Slider />
            <Shop keyword={keyword} pagenumber={pagenumber}/>
            <CalltoAction />
            <Footer />
        </div>
    );
};

export default HomeView;