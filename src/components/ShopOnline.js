import React from "react";
import Shop from "../assets/Rectangle 17.png";

const ShopOnline = () => {
  return (
    <section className="m-10">
      <div className="row">
        <div className="col-md-7 heading-shopOnline">
          Shop Online <br/> with <hr className="line-shopOnline"></hr>
          <br/>
          <text className="color">divide pay</text>
        </div>
        <div className="col-md-5">
          <img src={Shop} alt="Shop" />
        </div>
      </div>
    </section>
  );
};

export default ShopOnline;
