import React, { useContext, useState } from 'react';
import firebaseConfig from '../../firebaseConfig';
import firebase from "firebase/app";

import "firebase/auth";
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../App';
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    }
        

const Login = () => {
    const history = useHistory();
    const [user, setUser] = useState(false);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/addProduct" } };
    const handleGoogleSign = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()

            .signInWithPopup(provider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                var credential = result.credential;

                // This gives you a Google Access Token. You can use it to access the Google API.
                var token = credential.accessToken;
                // The signed-in user info.
                const {displayName,email} = result.user;
                const signedInUser ={name: displayName,email};
                setLoggedInUser(signedInUser);
                setUser(true);
                history.replace(from);
                // ...
            }).catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
            });
    }

    return (
        <div>
            <div className="card text-center">
                <div className="card-header">
                  {user ?<p>Your Are Logged in</p>:<p>Login</p>} 
                 </div>
                <div className="card-body">
                    <h5 className="card-title">The Simplest Way To Log You In</h5>
                    <p className="card-text">Click To Login</p>
                    <button className="btn btn-primary" onClick={handleGoogleSign}>Sign In With Google</button>
                </div>
                <div className="card-footer text-muted">
                    All Rights Reserved.
                </div>
            </div>
        </div>
    );
};

export default Login;