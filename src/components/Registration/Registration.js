import React, { useContext, useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../logos/Group 1329.png';

const Registration = () => {
    const { registration, errors, handleRegistration } = useForm();
    const {_id} = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [volunteer, setVolunteer] = useState({});

    useEffect(() => {
        fetch('http://localhost:4000/event/'+_id)
            .then(res => res.json())
            .then(data => setVolunteer(data))
    }, [_id])

    const onSubmit = data => {
        const userData = {...data, ...volunteer}
        fetch('http://localhost:4000/addUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Submit done')
                }
            })
    };


    return (
        <div>
            <div>
            <img className='logoo' src={logo} alt=""/>
            </div>
            <Form onSubmit={handleRegistration(onSubmit)}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control defaultValue={loggedInUser.name} type="email"  placeholder="Enter email" ref={registration({ required: true })} />
                    <br/>
                        {errors.Name && <span>your name is required<br /></span>}
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control defaultValue={loggedInUser.email} type="password" placeholder="Password" ref={registration({ required: true })} />
                    <br />
                        {errors.email && <span>your email is required<br /></span>}

                </Form.Group>
                <Form.Group controlId="">
                    <Form.Label>Date</Form.Label>
                    <Form.Control defaultValue={loggedInUser.date} type="date" placeholder="Date" ref={registration({ required: true })} />
                </Form.Group> 
                <Form.Group controlId="">
                    <Form.Label>Description</Form.Label>
                    <Form.Control defaultValue={loggedInUser.event} type="text" placeholder="Organize books at the library." ref={registration({ required: true })} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Registration
                </Button>
             </Form>
        </div>
    );
};

export default Registration;