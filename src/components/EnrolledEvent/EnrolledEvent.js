import React, { useContext, useEffect, useState } from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';
import { UserContext } from '../../App';
import Header from '../Header/Header';
import './EnrolledEvent.css';
const EnrolledEvent = () => {

    const [enrollEvent, setEnrollEvent] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    console.log(enrollEvent);
    useEffect(() => {
        fetch('https://obscure-bayou-60480.herokuapp.com/userInfo?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setEnrollEvent(data));
    },[loggedInUser.email])

    const deleteEvent = (id) => {
        fetch('https://obscure-bayou-60480.herokuapp.com/deleteUser/' + id, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                alert("deleted successfully")
            })
    }
    return (
        <div className='container'>
           <Header></Header>
           <div className=' row col-md-6 d-flex'>
            {enrollEvent.map(allEvent =>
            
                <Card style={{ width: '14rem' }}>
                <Card.Img variant="top" src={allEvent.image} />
                <Card.Body>
                    <Card.Title>{allEvent.name}</Card.Title>
                    {/* <Card.Text>
                   {allEvent.email}
                    </Card.Text> */}
                    <Button onClick={() => deleteEvent(allEvent._id)} variant="primary">Cancel</Button>
                </Card.Body>
                </Card>
                )}
             
             </div>
            
        </div>
    );
};

export default EnrolledEvent;