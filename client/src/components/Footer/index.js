import React from "react";
import { Navbar, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faYoutube, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';

const facebook = <FontAwesomeIcon icon={faFacebookSquare} />
const instagram = <FontAwesomeIcon icon={faInstagram} />
const youtube = <FontAwesomeIcon icon={faYoutube} />
const email = <FontAwesomeIcon icon={faEnvelope} />



function AppFooter() {
    return (
        <Navbar  className="nav sticky-bottom">
            <Container fluid>
                <div className="col-md-4">
                    <span className="text-dark">&copy; 2017 Company, Inc</span>
                </div>

                <ul className=" col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-3">
                        <a className="text-dark" href="mailto:perilousoutdoorsco@gmail.com">
                        {email}
                        </a>
                    </li>
                    <li className="ms-3">
                        <a className="text-dark" href="https://www.instagram.com/perilous.outdoors.co/">
                            {instagram}
                        </a>
                    </li>
                    <li className="ms-3">
                        <a className="text-dark" href="https://www.facebook.com/perilous.outdoors.co">
                            {facebook}
                        </a>
                    </li>
                    <li className="ms-3">
                        <a className="text-dark" href="https://www.youtube.com/channel/UCTpqOpv18seMxizaQzLFZCw">
                            {youtube}
                        </a>
                    </li>
                </ul>
            </Container>
        </Navbar>
    );
}

export default AppFooter;