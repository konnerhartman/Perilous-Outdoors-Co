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
                    <div className="prof-text">
                      Konner Hartman

                      Since his early years, Konner has been an outdoor enthusiast. As a child, he went on family camping outings and annual spring break cabin trips. He has always had a passion for anything outdoors, whether it be rock climbing, backpacking, or just day hikes. He also has a passion for environmental sustainability, which sprouted from his studies at Texas A&M University, where he received a bachelor's degree in wildlife and fishery sciences. In turn, Konner hopes to use Perilous Outdoors Co. as a gateway to bring awareness and act as an introduction to sustainable outdoor recreation.
                    </div>
                  </div>
                </div>
                <div className="col-6 prof-cont">
                  <img src={Mike} alt="Mike" className="prof-image"></img>
                  <div className="overlay">
                    <div className="prof-text">
                      Michael Benavidez

                      Going off grid to explore has been a desire of Michael’s since childhood. His first backpacking trip to Colorado Bend SP reignited his passion of disconnecting and welcoming the wild of the trails. His discovery and bond of the outside world, with cofounder Konner Hartman, started a journey to create a company that advocated for the outdoor life. Michael started his first business in 2013, which provides Perilous Outdoors Co. with the entrepreneurial foundation needed to execute the overall mission and create an environment that can sustain his love of nature.
                    </div>
                  </div>  
                </div>
            </div>
        </div>
    </div>
  );
};

export default About;
