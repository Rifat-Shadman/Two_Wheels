import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useState } from "react";
import { useContext } from "react";
import { useHistory, useLocation } from "react-router";
import { SelectedContext, UserContext } from "../../App";
import './Login.css';
import { Button } from 'react-bootstrap';


if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {

    const [selectedBike, setSelectedBike] = useContext(SelectedContext);

    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        photo: ''
    });


    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    // console.log(from);
    const handleGoogleSignIn = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        return firebase.auth().signInWithPopup(googleProvider)
            .then(function (res) {
                // console.log(res.user);
                const { displayName, photoURL, email } = res.user;
                const signedInUser = {
                    isSignedIn: true,
                    name: displayName,
                    email: email,
                    photo: photoURL
                    // success: true
                };
                // console.log('signed in user:  ', signedInUser);
                setUser(signedInUser);
                setLoggedInUser(signedInUser);
                setSelectedBike(selectedBike);
                history.replace(from);
            })
            .catch(err => {
                console.log(err);
                console.log(err.message);
            })
    }
    return (

        <div >
            <button class="loginButton" onClick={handleGoogleSignIn}>Sign In using Google</button>
            {/* <Button className="loginButton" onClick={handleGoogleSignIn} variant="primary" size="lg" >Sign In using Google</Button> */}

        </div>
    );
};

export default Login;