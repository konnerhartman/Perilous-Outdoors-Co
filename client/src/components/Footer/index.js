import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div className="container">
            <div id="iconlinks" className="">
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
                    <li>
                        <p><a href="mailto:perilousoutdoorsco@gmail.com">Email</a></p>
                        <p><a href="https://www.facebook.com/perilous.outdoors.co">Facebook</a></p>
                        <p><a href="https://www.instagram.com/perilous.outdoors.co/">Instagram</a></p>
                    </li>
                </ul>
            </div>

        </div>
    );
}

export default Footer;