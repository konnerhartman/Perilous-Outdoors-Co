import React from "react";
import { Link } from "react-router-dom";
import AboutPoco from "../components/About";


const Home = () => {
  return (
    <div>
      <div className="jumbotron text-center">
        <div id="vertical-center" className="center">
          <div id="jumbo-text">
            <h2 className="jumText">Rethinking the Outdoors</h2>
            <h2 className="jumText">Renovating the Gear</h2>
          </div>
          <div>
            <button id="home-button">
              <Link id="home-button-text" to="/shop">
                Shop
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div className="body">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              < AboutPoco />
            </div>
            <div className="col-lg-6">
              Instagram API goes here
            </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Home;
