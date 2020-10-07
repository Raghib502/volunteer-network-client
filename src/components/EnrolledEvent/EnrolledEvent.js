import React, { useContext, useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { UserContext } from '../../App';

const EnrolledEvent = () => {

    const [enrollEvent, setEnrollEvent] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    console.log(enrollEvent);
    useEffect(() => {
        fetch('http://localhost:4000/userInfo' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setEnrollEvent(data));
    },[loggedInUser.email])

    const deleteEvent = (id) => {
        fetch('http://localhost:4000/deleteUser/' + id, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                alert("deleted successfully")
            })
    }
    return (
        <div>
            {enrollEvent.map(allEvent =>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={allEvent.img} />
                <Card.Body>
                    <Card.Title>{allEvent.name}</Card.Title>
                    <Card.Text>
                   {allEvent.email}
                    </Card.Text>
                    <Button onClick={() => deleteEvent(enrollEvent.id)} variant="primary">Cancel</Button>
                </Card.Body>
                </Card>
                )}
            
            
        </div>
    );
};

export default EnrolledEvent;