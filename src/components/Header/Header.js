import React from 'react';
import { Button, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import logo from '../../logos/Group 1329.png';
import { useHistory } from 'react-router-dom';
const Header = () => {

    const history = useHistory();
    return (
        <div className="container">
         <Nav className="justify-content-end">
                <img className="logo" src={logo} alt=""/>
                <Nav.Item>
                <Nav.Link href="/home">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link >Donation</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link >Events</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link >Blog</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Button variant="primary" onClick={() => history.push('/login')} className="button">Register</Button>
                </Nav.Item>
                <Nav.Item>
                <Button variant="dark" className="button">Admin</Button>
                </Nav.Item>
            </Nav>

        </div>
    );
};

export default Header;