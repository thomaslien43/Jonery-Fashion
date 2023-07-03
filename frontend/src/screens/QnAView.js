import React from "react";
import Header from "../components/Header";

const QnAView = () => {
  return (
    <>
      <Header />
      <div className="qna">
        <div className="container">
          <div className="col-md-6">
            <div className="mb-5 mb-md-3 bg-light p-3 shadow-sm rounded">
              <h1>Question 1</h1>
              <div className="alert alert-info mt-3">Answer</div>
            </div>
            <div className="mb-5 mb-md-3 bg-light p-3 shadow-sm rounded">
              <h1>Question 2</h1>
              <div className="alert alert-info mt-3">Answer</div>
            </div>
            <div className="mb-5 mb-md-3 bg-light p-3 shadow-sm rounded">
              <h1>Question 3</h1>
              <div className="alert alert-info mt-3">Answer</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QnAView;
