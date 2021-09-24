import React, { Component } from 'react';
import StreamsList from '../components/StreamsList';


class StreamsContainer extends Component {

    state = {
        streams: [],
        loading: true
    }

    componentDidMount() {
        //add to environment variable later
        fetch('http://localhost:3001/streams', {
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }

        })
        .then(response => response.json())
        .then(streamsJson => {
            console.log('Streams maybe', streamsJson)
            this.setState({ 
                streams: streamsJson,
                loading: false
            })
        }
            )
    }


    render() {
        return (
            <section className="section bg-yellow-100">
                <div className="container mx-auto m-6 p-12">
                 <h1 className="streams-listing-header">Hi I'm the Stream container</h1>
                 {/* We can also do conditional outside the return, see StreamShowContainer */}
                 {this.state.loading ? "loading spinner" : <StreamsList streams={this.state.streams} /> } 
                 
                </div>
            </section>
        )
    }
}

export default StreamsContainer
