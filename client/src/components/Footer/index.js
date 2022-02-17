import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faYoutube, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';

const facebook = <FontAwesomeIcon icon={faFacebookSquare} />
const instagram = <FontAwesomeIcon icon={faInstagram} />
const youtube = <FontAwesomeIcon icon={faYoutube} />
const email = <FontAwesomeIcon icon={faEnvelope} />



function AppFooter() {
    return (
        <Navbar bg='dark' className="fixed-bottom">
            <Container fluid>
                <div className="col-md-4 d-flex align-items-center">
                    <span className="text-muted">&copy; 2021 Company, Inc</span>
                </div>

                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-3">
                        <a className="text-muted" href="mailto:perilousoutdoorsco@gmail.com">
                        {email}
                        </a>
                    </li>
                    <li className="ms-3">
                        <a className="text-muted" href="https://www.instagram.com/perilous.outdoors.co/">
                            {instagram}
                        </a>
                    </li>
                    <li className="ms-3">
                        <a className="text-muted" href="https://www.facebook.com/perilous.outdoors.co">
                            {facebook}
                        </a>
                    </li>
                    <li className="ms-3">
                        <a className="text-muted" href="https://www.youtube.com/channel/UCTpqOpv18seMxizaQzLFZCw">
                            {youtube}
                        </a>
                    </li>
                </ul>

                {/* <div className="row">
                    <div className="col l6 m6 s6 center-align">
                        
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
                </div> */}
            </Container>
        </Navbar>
    );
}

export default AppFooter;