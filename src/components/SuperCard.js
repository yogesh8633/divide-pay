import React from "react";
import DividepayCard from "../assets/Rectangle 18.png";

const SuperCard = () => {
  return (
    <section className="m-10">
      <div className="row">
        <div className="col-md-5">
          <img src={DividepayCard} alt="Supercard" />
        </div>
        <div className="col-md-7 heading-supercard">
          <hr className="line-supercard"></hr>
          <br />
          TAKE COMPLETE CONTROL OF YOUR <text className="color">DIVIDEPAY SUPERCARD</text>
        </div>
      </div>
    </section>
  );
};

export default SuperCard;
