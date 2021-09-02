import React, { Component } from 'react';
import StreamsList from '../components/StreamsList';


class StreamsContainer extends Component {

    state = {
        streams: [],
        loading: true
    }

    componentDidMount() {
        this.setState({
            streams: [{
                name: "FirstStream",
                description: "This is a first stream",
                schedule: "Monday"
            }, {
                name: "SecondStream",
                description: "A second stream",
                schedule: "Thursday"
            }],
            loading: false
        })
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
