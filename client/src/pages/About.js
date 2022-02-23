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
                <div className="col-6">
                  <img src={Konner} alt="Konner"></img>
                </div>
                <div className="col-6">
                <img src={Mike} alt="Mike"></img>
                </div>
            </div>
        </div>
    </div>
  );
};

export default About;
