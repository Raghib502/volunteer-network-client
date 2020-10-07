import React, { useContext, useState } from 'react';
import "firebase/auth";
import { useHistory, useLocation } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { UserContext } from '../../App';
import logo from '../../logos/Group 1329.png';
import './Login.css';
import icon from '../../logos/google.png'
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';




  
 firebase.initializeApp(firebaseConfig);

const Login = () => {

const [loggedInUser, setLoggedInUser] = useContext(UserContext)
const history = useHistory();
const location = useLocation();
const { from } = location.state || { from: { pathname: "/" } };


const provider = new firebase.auth.GoogleAuthProvider();
const handleGoogleSignIn = () => {
    firebase.auth().signInWithPopup(provider)
        .then(function (result) {
            const { displayName, email } = result.user;
            const signedInUser = { name: displayName, email }
            setLoggedInUser(signedInUser);
            history.replace(from);

        }).catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
}
    return (
        <div >
          <div>
            <img className='logoo' src={logo} alt=""/>
          </div>
          <div id="nav">
          <Button className="signInMethod" onClick={handleGoogleSignIn}> <img className='icon' src={icon} alt=""/> Continue with Google</Button>  
          <p>Don't have an account? <a id='span' href='/'>Create an account</a></p>
          <br/>
          </div>


        </div>
    );
};

export default Login;