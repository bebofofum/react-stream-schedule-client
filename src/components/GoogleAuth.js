import React, { Component} from 'react';
import '../styles/GoogleAuth.css';


class GoogleAuth extends Component {

    state = {
        isSignedIn: null
    }

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: "876483212383-e2v3bokpqpoqmb4ifoke4jmckimcjc6e.apps.googleusercontent.com",
                scope: "email",
                plugin_name: "stream-scheduler"
            })
            .then( () => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({ 
                    isSignedIn: this.auth.isSignedIn.get()
                })
                this.auth.isSignedIn.listen(this.onAuthChange)
            })
        })

    }

    onAuthChange = () => {
        this.setState({
            isSignedIn: this.auth.isSignedIn.get()
        })
    }

    handleSignIn = () => {
        this.auth.signIn();
    }

    handleSignOut = () => {
        this.auth.signOut();
    }

    renderAuthButton() {
        if(this.state.isSignedIn === null) {
            return null;
        } else if(this.state.isSignedIn) {
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

export default GoogleAuth