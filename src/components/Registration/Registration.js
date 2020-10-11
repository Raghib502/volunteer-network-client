import React, { useContext, useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../logos/Group 1329.png';
import './Registration.css';


const Registration = () => {
    const { handleSubmit } = useForm();
    const {name} = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [volunteer, setVolunteer] = useState({});
    const history = useHistory();


    const [selectedDate, setSelectedDate] = useState({
        date: new Date()
    });

    const handleEventDate = (date) => {
        const newDates = { ...selectedDate }
        newDates.date = date;
        setSelectedDate(newDates);
        
    };


    useEffect(() => {
        fetch('https://obscure-bayou-60480.herokuapp.com/event/'+name)
            .then(res => res.json())
            .then(data => setVolunteer(data[0]))

    }, [name])

    const onSubmit = (data) => {
        const userData = {...selectedDate, email:loggedInUser.email, name:volunteer.name, image:volunteer.image}
        fetch('https://obscure-bayou-60480.herokuapp.com/addUser', {
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
                    history.push('/enrollEvent')
                }
            })
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
                        <Form.Control value={loggedInUser.name} type="name"  placeholder="name"/>                   
                    </Form.Group>
                    <Form.Group controlId="">    
                        <Form.Control value={loggedInUser.email} type="email" placeholder="email"/>  
                    </Form.Group>
                    <Form.Group controlId="date">
                        <Form.Control placeholder="Date" value={selectedDate.date} onChange={handleEventDate}/>
                    </Form.Group> 
                
                    <Form.Group controlId="">
                        <Form.Control defaultValue={volunteer.name} type="text" placeholder="Organize books at the library."/>
                    </Form.Group>
                    
                    <Button variant="primary" type="submit">
                        Registration
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default Registration;