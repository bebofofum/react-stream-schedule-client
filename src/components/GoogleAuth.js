import React, { Component} from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions/auth.js'
import '../styles/GoogleAuth.css';


class GoogleAuth extends Component {

   

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: "876483212383-e2v3bokpqpoqmb4ifoke4jmckimcjc6e.apps.googleusercontent.com",
                scope: "email",
                plugin_name: "stream-scheduler"
            })
            .then( () => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen(this.onAuthChange)
            })
        })

    }

    onAuthChange = (isSignedIn) => {
        isSignedIn ? this.props.signIn() : this.props.signOut()
        
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