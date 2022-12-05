import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Home = () => {
  return (
    <section className="m-10" >
      <div className="row">
        <div className="home-text col-md-5">
          Why pay Today When you can Divide & Pay your bills in 3, For FREE
          <hr className="line"></hr>
          <div className="scrollMore">Scroll down to learn more</div>
          <FontAwesomeIcon icon="check-square" />
        </div>
        <div className="home-img col-md-7">
        <span class="dot1"></span>
        <span class="dot2"></span>
        <span class="dot3"></span>
        </div>
        
      </div>
      <div className="mountain front"></div>
      <div className="mountain back"></div>
      {/* <canvas style="position: absolute;left:0;z-index: -1;" id="canvas" width="1280" height="406"></canvas> */}
    </section>
  );
};

export default Home;
