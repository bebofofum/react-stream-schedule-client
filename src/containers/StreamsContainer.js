import React, { Component } from 'react';
import StreamsList from '../components/StreamsList';


class StreamsContainer extends Component {

    state = {
        streams: [],
        loading: true
    }

    componentDidMount() {
        //add to environment variable later
        fetch('http://localhost:3000/streams', {
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }

        })
        .then(response => response.json())
        .then(streamsJson => 
            console.log('Streams maybe', streamsJson))
    }


    render() {
        return (
            <section className="section is-medium bg-yellow-50">
                <div className="container is-max-desktop">
                 <h1 className="">Hi I'm the Stream container</h1>
                 {this.state.loading ? "loading spinner" : (<StreamsList streams={this.state.streams} />) }
                 
                </div>
            </section>
        )
    }
}

export default StreamsContainer
