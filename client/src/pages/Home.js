import React from "react";
import { Link } from "react-router-dom";
import AboutPoco from "../components/About";


const Home = () => {
  return (
    <div className="containers">
      <div className="jumbotron">
        <div id="vertical-center" className="center">
          <h2 id="jumText">Rethinking the Outdoors | Renovating the Gear</h2>
          <div className="text-center">
            <button>
              <Link to="/shop">
                Shop
              </Link>
            </button>
          </div>
        </div>
      </div>
      < AboutPoco />
    </div>
  );
};

export default Home;
