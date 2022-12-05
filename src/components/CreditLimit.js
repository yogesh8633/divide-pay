import React from "react";
import Sword from "../assets/SayNo.png";
import credit from "../assets/Platonic_1_-_Octa0011.png";

const CreditLimit = () => {
  return (
    <section className="m-10">
      <div className="row m-l-10">
      <div className="col-md-4">
          <img src={Sword} alt="Sword" className="sword"/></div>
          <div className="col-md-2">
          <hr className="line-CreditLimit"></hr>
        </div>
        <div className="col-md-6 credit-text">
          <img src={credit} className="credit-img" alt="Pattern"/><br/>
          The Credit Limit You’ll Ever Need:<br/>5k to 5L</div>
        
    </div>
    </section>
  );
};

export default CreditLimit;
