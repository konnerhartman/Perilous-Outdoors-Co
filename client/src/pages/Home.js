import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <div className="jumbotron">
        <h2>Rethinking the Outdoors | Renovating the Gear</h2>
        <button>
          <Link to="/shop">
              Shop
            </Link>
          </button>
      </div>
    </div>
  );
};

export default Home;
