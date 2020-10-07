import React, { useContext, useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link, useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../logos/Group 1329.png';
import './Registration.css';

const Registration = () => {
    const { handleSubmit } = useForm();
    const {name} = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [volunteer, setVolunteer] = useState({});
    const history = useHistory();

    useEffect(() => {
        fetch('http://localhost:4000/event/'+name)
            .then(res => res.json())
            .then(data => setVolunteer(data))
    }, [name])

    const onSubmit = (data) => {
        const userData = {...data, image:volunteer.image}
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
            if (userData.image) {
                history.push('/enrollEvent')
            }
    };


    return (
        <div>
            <div>
            <img className='logoo' src={logo} alt=""/>
            </div>
             <div>
                <h4>Register as a {volunteer.name}</h4>
<Form onSubmit={handleSubmit(onSubmit)} className='form'>
                <Form.Group controlId="">
                    <Form.Control defaultValue={loggedInUser.name} type="name"  placeholder="name"/>                   
                </Form.Group>
                <Form.Group controlId="">    
                    <Form.Control defaultValue={loggedInUser.email} type="email" placeholder="emeil"/>
                </Form.Group>
                <Form.Group controlId="">
                    <Form.Control type="date" placeholder="Date"/>
                </Form.Group> 
                <Form.Group controlId="">
                    <Form.Control defaultValue={volunteer.event} type="text" placeholder="Organize books at the library."/>
                </Form.Group>
                <Link to= '/enrollEvent'>
                <Button variant="primary" type="submit">
                    Registration
                </Button></Link>
             </Form>
            </div>
        </div>
    );
};

export default Registration;