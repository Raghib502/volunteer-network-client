import React, { useContext, useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { UserContext } from '../../App';

const Admin = () => {

    const [enrollEvent, setEnrollEvent] = useState([{}]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    console.log(enrollEvent);
    useEffect(() => {
        fetch('https://obscure-bayou-60480.herokuapp.com/registerUserList')
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
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email id</th>
                        <th>Registrating date</th>
                        <th>Volunteer List</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {enrollEvent.map(allEvent =>
                <tbody>
                    <tr>
                        <td>{loggedInUser.name}</td>
                        <td>{allEvent.email}</td>
                        <td></td>
                        <td>{allEvent.name}</td>
                        <td><Button onClick={() => deleteEvent(allEvent._id)} variant="danger">Delete</Button></td>
                    </tr>
                </tbody>
                )}
        </Table>
        </div>
    );
};

export default Admin;