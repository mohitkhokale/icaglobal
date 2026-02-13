import React from "react";
import "../assets/css/verify.css";

const Verify = () => {
  return (
    <div className="verify-page">

      <section className="verify-hero">
        <div className="container">
          <h1>Verify Certificate</h1>
          <p>Enter certificate number to verify</p>
        </div>
      </section>

      <div className="verify-box container">
        <input type="text" placeholder="Enter certificate number"/>
        <button>Verify</button>
      </div>

    </div>
  );
};

export default Verify;
