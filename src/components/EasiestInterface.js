import React from "react";
import HomeFlip from "../assets/Home-flip.png";
import atom from "../assets/Atom_3_-_Octa0011.png";

const EasiestInterface = () => {
  return (
    <section className="bg-img m-10">
      <div className="row">
        <div className="col-md-7">
          <img src={atom} alt="ATOM" className="atom" />
          <div className="heading-interface">
            Easiest Interface
            <hr className="line-interface"></hr>
            <div className="subtext">
              A very easy dashboard <br />
              allows you to understand <br />
              your spends & due date, So <br /> that you never miss a <br />{" "}
              payment.
              <p className="font-weight-bold color">
                <br />
                Download the App Now
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-5">
          <img src={HomeFlip} alt="Easiest Interface" />
        </div>
      </div>
    </section>
  );
};

export default EasiestInterface;
