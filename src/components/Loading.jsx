import React from "react";

const Loading = () => {
  return (
    <div className="container text-center mt-5">
      <div
        className="spinner-border text-primary"
        role="status"
        style={{
          width: "15rem",
          height: "15rem",
        }}
      ></div>

      <div className="mt-3">
        <h1>Loading...</h1>
      </div>
    </div>
  );
};

export default Loading;
