import React, { useEffect, useState } from 'react';
import { Button, Form, FormControl, Row } from 'react-bootstrap';
import fakeData from '../../fakedata/volunteerList'
import Header from '../Header/Header';
import VolunteerTypes from '../VolunteerTypes/VolunteerTypes';
import './Home.css';
const Home = () => {
    
    // const [allEvents, setAllEvents] = useState([]);
    // useEffect(() => {
    //     fetch('http://localhost:4000/allEvent')
    //         .then(res => res.json())
    //         .then(data => setAllEvents(data))
    //         .catch(error => console.log(error))
    // }, [])
    
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
                {/* {
                    allEvents.map(allEvent => <VolunteerTypes volunteerType={allEvent} />)
                } */}
            </Row>
        </div>

    );
};

export default Home;