import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './VolunteerTypes.css';

const VolunteerTypes = (props) => {
    const [allEvents, setAllEvents] = useState([]);
    useEffect(() => {
        fetch('https://obscure-bayou-60480.herokuapp.com/allEvent')
            .then(res => res.json())
            .then(data => setAllEvents(data))
            .catch(error => console.log(error))
    }, [])


    
    return (
        <div className="container row d-flex">    
         {
             allEvents.map(event => 
                <Card key={event._id} style={{ width: '16rem', background: `${event.background}` }} className="card">
            <Card.Img variant="top" className="img" src={event.image} />
            <Card.Body>
                <Link to={`/registration/${event._id}`}>
            <Button style={{ background: `${event.background}`, borderColor: `${event.background}` }}>{event.name}</Button>
            </Link>
            </Card.Body>
            </Card>
                )
         }
            
        </div>


    );
};

export default VolunteerTypes;