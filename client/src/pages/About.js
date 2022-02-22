import React from "react";
import AboutPoco from "../components/About";

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
                  <img src="../assets/pocoaboutkonner.jpeg" alt="Konner"></img>
                </div>
                <div className="col-6">
                <img src="../assets/pocoaboutmike.jpeg" alt="Mike"></img>
                </div>
            </div>
        </div>
    </div>
  );
};

export default About;
