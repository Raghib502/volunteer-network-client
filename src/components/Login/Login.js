import React, { useContext, useState } from 'react';
import "firebase/auth";
import { handleGoogleSignIn, handleSignedOut, initializeLoginFramework } from './LoginManager';
import { useHistory, useLocation } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { UserContext } from '../../App';
import logo from '../../logos/Group 1329.png';
import './Login.css';
import icon from '../../logos/google.png'

const Login = () => {

    const[newUser, setNewUaser]= useState(false);
    const [user, setUser] = useState({
      isSignedIn: false,
      name: '',
      email:'',
      password:'',
    });

    initializeLoginFramework();

  const[loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const googleSignIn =() => {
    handleGoogleSignIn()
    .then(res =>{
       handleResponse(res, true);
    })
}


const handleResponse = (res, redirect) =>{
    setUser(res);
    setLoggedInUser(res);
    if(redirect){
        history.replace(from);
    }
}

const signOut = () => {
    handleSignedOut()
    .then(res =>{
        handleResponse(res, false);
    })
} 
    return (
        <div >
          <div>
            <img className='logoo' src={logo} alt=""/>
          </div>
          <div id="nav">
          <Button className="signInMethod" onClick={googleSignIn}> <img className='icon' src={icon} alt=""/> Continue with Google</Button>  
          <p>Don't have an account? <a id='span' href='/'>Create an account</a></p>
          <br/>
          {
            user.isSignedIn && <div><p>Welcome, {user.name}</p>
            </div>
          }
          <p style={{color:'red'}}>{user.error}</p>
          {user.success && <p style={{color:'green'}}>User {newUser ? 'created' : 'Logged In'} successfully</p>}
          </div>


        </div>
    );
};

export default Login;