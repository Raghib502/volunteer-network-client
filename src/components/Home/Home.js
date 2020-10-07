import React from 'react';
import { Button, Form, FormControl, Row } from 'react-bootstrap';

import Header from '../Header/Header';
import VolunteerTypes from '../VolunteerTypes/VolunteerTypes';
import './Home.css';

const Home = () => {
    
    return (
             
        <div className = "container">
                <Header></Header>
            <h2 className="title">I grow by helping people in need</h2>
            <Form inline className="justify-content-center searchBar">
            
                <FormControl type="text" placeholder="Search"  />
                <Button variant="primary">Search</Button>
            </Form>
            
            <Row className="row">
             <VolunteerTypes></VolunteerTypes>
            </Row>
        </div>

    );
};

export default Home;