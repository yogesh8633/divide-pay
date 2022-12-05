import React from "react";
import Card from "../assets/6081091.png";

const DividepayCard = () => {
  return (
    <section className="m-10">
      <div className="row">
        <div className="col-md-5">
          <img src={Card} alt="Divide Pay Card" className="dividepaycard" />
        </div>
        <div className="col-md-7 heading-card">
          Super <text className="color">Dividepay </text> Card <br/>
          <button type="button" class="btn btn-dark btn-lg btn-card">Download App Now</button>
        </div>
       
      </div>
    </section>
  );
};

export default DividepayCard;
