import React from "react";

const CalltoAction = ()=>{
    return(
        <div className="subscribe-section bg-with-black">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="subsribe-head">
                            <h2>Do you need more tips?</h2>
                            <p>Sign up free and get the lastest tips</p>
                            <form className="form-section">
                                <input placeholder="Your Email..." name="email" type="email" />
                                <input value="Yes. I Want!" name="subscribe" type="submit" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CalltoAction;