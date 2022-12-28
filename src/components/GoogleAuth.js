import React, { Component} from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions/auth.js'
import { GoogleLogin } from '@react-oauth/google';
import '../styles/GoogleAuth.css';


class GoogleAuth extends Component {



    handleGoogleCredentialResponse(response) {
        console.log("Encoded JWT Id token: " + response.credential)

    }

   

    componentDidMount() {
        /* global google */
        // google.accounts.id.initialize({
        //     client_id: "964507703250-04ebsekfvcljm5j4ke441ocdtu381sag.apps.googleusercontent.com",
        //     callback: this.handleGoogleCredentialResponse
        // })

        // google.accounts.id.renderAuthButton(
        //     document.getElementById("googleButton"), {
        //         theme: "filled_black",
        //         size: "large",
        //         text: "signin"
        //     }
        // )


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



    onAuthChange = (isSignedInBool) => {
        const userId = this.auth.currentUser.get().getId();
        isSignedInBool ? this.props.signIn(userId) : this.props.signOut()
        
    }

    handleSignIn = () => {
        this.auth.signIn();
    }

    handleSignOut = () => {
        this.auth.signOut();
    }


    renderAuthButton() {
        if(this.props.isSignedIn === null) {
            return null;
        } else if(this.props.isSignedIn) {
            return (
                <button onClick={this.handleSignOut} className="googleButton">Sign Out</button>
            )
        } else {
            return (
                <button onClick={this.handleSignIn} className="googleButton">Sign In</button>
            )
        }
    }

    render() {
        return (
            <div>{this.renderAuthButton()}</div>
        )
    }
}

const mapStatetoProps = (state) => {
    return {
        isSignedIn: state.auth.isSignedIn
    }

}

export default connect(mapStatetoProps, { signIn, signOut })(GoogleAuth)