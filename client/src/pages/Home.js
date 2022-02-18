import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
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
    </div>
  );
};

export default Home;
