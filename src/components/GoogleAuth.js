import React, { Component} from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions/auth.js'
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import { CLIENT_ID } from './ClientId.js';
import '../styles/GoogleAuth.css';


class GoogleAuth extends Component {

    handleSignOut = () => {
        this.props.signOut()
    }


    renderAuthButton() {
        console.log("when does this fire?", this.props.isSignedIn)

        if(this.props.userId) {
            console.log("is this firing?")
            return (
                <div>
                    <button onClick={this.handleSignOut} className="googleButton">Sign Out</button>
                </div>
                );
            
        } else {
            return (
                <GoogleLogin 
                clientId={CLIENT_ID}
                buttonText="Login"
                onSuccess={this.onSuccess}
                onError={this.onError}
                cookiePolicy={'single_host_origin'}
                isSignedIn={this.props.isSignedIn}
                />

            )
        }

    }



    onSuccess = (response) => {
        console.log("LOGIN SUCCESSFUL. Current User = ", response)
        const userObject = jwt_decode(response.credential)
        console.log("user details: ", userObject)
        const userId = userObject.sub

        this.props.signIn(userId)

        const googleButton = document.getElementById("googleLoginBtn")

    }

    onError = (response) => {
        console.log("LOGIN UNSUCCESSFUL. Error = ", response)
    }



    render() {
        return (
            <div id="googleLoginBtn" >{this.renderAuthButton()}
            </div>
        )
    }
}

const mapStatetoProps = (state) => {
    return {
        isSignedIn: state.auth.isSignedIn,
        userId: state.auth.userId
    }

}

export default connect(mapStatetoProps, { signIn, signOut })(GoogleAuth)