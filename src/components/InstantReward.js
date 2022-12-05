import React from "react";
import chest from "../assets/Chest.png";

const InstantReward = () => {
  return (
    <section className="bg-img m-10 z-index">
      <div className="row">
        <div className="col-md-5">
          <img src={chest} alt="Chest" className="instant-reward" />
        </div>
        <div className="col-md-7 heading">
          Instant Rewards&nbsp;&nbsp;
          <hr className="line-instantreward"></hr>
          <div className="sub-heading col-md-7">
            Enjoy upto 1% Cashback on every Transaction.
          </div>
          <div className="coin"></div>
          
        </div>
      </div>
    </section>
  );
};

export default InstantReward;
