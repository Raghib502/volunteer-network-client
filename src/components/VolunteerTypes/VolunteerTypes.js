import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import './VolunteerTypes.css';

const VolunteerTypes = (props) => {
    // const {name, image,background,_id} = props.volunteerType;
    // const history = useHistory();
    // const handleBook = (name) => {
    //     history.push(`/registration/${_id}`);
    // }
    const [allEvents, setAllEvents] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4000/allEvent')
            .then(res => res.json())
            .then(data => setAllEvents(data))
            .catch(error => console.log(error))
    }, [])
    
    return (
        <div className="container row d-flex">    
         {
             allEvents.map(event => 
                <Card style={{ width: '16rem', background: `${event.background}` }} className="card">
            <Card.Img variant="top" className="img" src={event.image} />
            <Card.Body>
                <Link to={`/event/${event._id}`}>
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