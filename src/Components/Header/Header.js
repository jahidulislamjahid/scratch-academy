import React from 'react';
import { Nav } from 'react-bootstrap';
import '../Header/Header.css'

const Header = () => {
    return (
        <div className="container sticky-top">
            <div className="navigation">
                <Nav variant="pills" className="nav-items">
                    <Nav.Item className="mx-3">
                        <Nav.Link href="/home">Active</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="mx-3">
                        <Nav.Link eventKey="link-1">Option 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="mx-3">
                        <Nav.Link eventKey="disabled">
                            Disabled
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="mx-3">
                        <Nav.Link eventKey="About">
                            About
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="mx-3">
                        <Nav.Link eventKey="career">
                            Career
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
        </div>


    );
};

export default Header;