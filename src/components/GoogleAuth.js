import React, { Component} from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions/auth.js'
import { GoogleLogin, googleLogout } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import { CLIENT_ID } from './ClientId.js';
import '../styles/GoogleAuth.css';


class GoogleAuth extends Component {


    handleCredResponse = (response) => {
        console.log("coming from handleCredResponse ", response.credential)
        const userObject = jwt_decode(response.credential)
        console.log("user details: ", userObject.sub)
        const userId = userObject.sub

        this.props.signIn(userId)

    }




   

    componentDidMount() {

        // window.gapi.load('client:auth2', () => {
        //     window.gapi.client.init({
        //         clientId: "876483212383-e2v3bokpqpoqmb4ifoke4jmckimcjc6e.apps.googleusercontent.com",
        //         scope: "email",
        //         plugin_name: "stream-scheduler"
        //     })
        //     .then( () => {
        //         this.auth = window.gapi.auth2.getAuthInstance();
        //         this.onAuthChange(this.auth.isSignedIn.get())
        //         this.auth.isSignedIn.listen(this.onAuthChange)
        //     })
        // })

    }



    // onAuthChange = (isSignedInBool) => {
    //     const userId = this.auth.currentUser.get().getId();
    //     isSignedInBool ? this.props.signIn(userId) : this.props.signOut()    
    // }

  


    //Keep methods below just in case new react-oauth depen doesn't work

    // handleSignIn = () => {
    //     this.auth.signIn();
    // }

    // handleSignOut = () => {
    //     this.auth.signOut();
    // }


    // renderAuthButton() {
    //     if(this.props.isSignedIn === null) {
    //         return null;
    //     } else if(this.props.isSignedIn) {
    //         return (
    //             <button onClick={this.handleSignOut} className="googleButton">Sign Out</button>
    //         )
    //     } else {
    //         return (
    //             <button onClick={this.handleSignIn} className="googleButton">Sign In</button>
    //         )
    //     }
    // }
    renderAuthButton() {
        this.props.isSignedIn === true ? console.log("client is signed in") : console.log("not signed in")

    }



    onSuccess = (response) => {
        console.log("LOGIN SUCCESSFUL. Current User = ", response)
        const userObject = jwt_decode(response.credential)
        console.log("user details: ", userObject.sub)
        const userId = userObject.sub

        this.props.signIn(userId)

        const googleButton = document.getElementById("googleLoginBtn")
        googleButton.style.display = "none"

    }

    onError = (response) => {
        console.log("LOGIN UNSUCCESSFUL. Error = ", response)
    }



    render() {
        return (
            <div id="googleLoginBtn" >
              <GoogleLogin 
                clientId={CLIENT_ID}
                buttonText="Login"
                onSuccess={this.onSuccess}
                onError={this.onError}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
                />     
            </div>
        )
    }
}

const mapStatetoProps = (state) => {
    return {
        isSignedIn: state.auth.isSignedIn
    }

}

export default connect(mapStatetoProps, { signIn, signOut })(GoogleAuth)