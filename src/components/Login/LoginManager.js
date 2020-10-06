import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';

export const initializeLoginFramework = () =>{
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }
}


export const handleGoogleSignIn = () =>{
    const googleProvider =new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(googleProvider)
    .then(res =>{
      const {displayName, email} = res.user;
      const signedInUser = {
        isSignedIn:true,
        name: displayName,
        email: email,
        success :true
      }
      return signedInUser;
    
    })
    .catch(err => {
      console.log(err);
      console.log(err.message);
    })
  }

  export const handleSignedOut = () =>{
    return firebase.auth().signOut()
    .then(res => {
      const signOutUser = {
        isSignedOut: false,
        name: '',
        email:'',
        error:''
      }
      return signOutUser;
    })
    .catch(err =>{

    });
  }
