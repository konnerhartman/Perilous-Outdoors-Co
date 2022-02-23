import React from "react";
import AboutPoco from "../components/About";
import Konner from "../assets/pocoaboutkonner.jpeg";
import Mike from "../assets/pocoaboutmike.jpeg";

const About = () => {
  return (
    <div className="container">
        <div>
          <AboutPoco />    
        </div>
        <div>
            <h2>Meet The Founders</h2>
            <div className="row">
                <div className="col-6 prof-cont">
                  <img src={Konner} alt="Konner" className="prof-image"></img>
                  <div className="overlay">
                    <div className="prof-text"></div>
                  </div>
                </div>
                <div className="col-6 prof-cont">
                  <img src={Mike} alt="Mike" className="prof-image"></img>
                  <div className="overlay">
                    <div className="prof-text"></div>
                  </div>  
                </div>
            </div>
        </div>
    </div>
  );
};

export default About;
