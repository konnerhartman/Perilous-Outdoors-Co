import React from "react";
import { Link } from "react-router-dom";


function Footer() {
    return (
        <footer className="page-footer black">
            <div className="container">
                <div className="row">
                    <div className="col l6 m6 s6 center-align">
                        <ul>
                            <li>
                                <Link to="/about">
                                    About
                                </Link>
                            </li>
                            <li>
                            <Link to="/shop">
                                Shop
                            </Link>
                            </li>
                            <li>
                            <Link to="/login">
                                Login
                            </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col l6 m6 s6 center-align">
                        <ul>
                            <li>
                                <a href="mailto:perilousoutdoorsco@gmail.com">Email</a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/perilous.outdoors.co">Facebook</a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/perilous.outdoors.co/">Instagram</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;