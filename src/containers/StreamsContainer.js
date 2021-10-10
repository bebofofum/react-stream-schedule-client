import React, { Component } from 'react';
import StreamsList from '../components/StreamsList';
import { connect } from 'react-redux';
import { fetchStreams } from '../actions/streams';


class StreamsContainer extends Component {

    // state = {
    //     streams: [],
    //     loading: true
    // }

    componentDidMount() {
        //below is the Redux way to use mapDispatch function below
        this.props.dispatchFetchStreams();



        //converting the below fetch which is React way to now use the mapDispatch function, dispatchFetchStreams
        //add to environment variable later
        // fetch('http://localhost:3001/streams', {
        //     method: 'get',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     }

        // })
        // .then(response => response.json())
        // .then(streamsJson => {
        //     console.log('Streams maybe', streamsJson)
        //     this.setState({ 
        //         streams: streamsJson.data,
        //         loading: false
        //     })
        // }
        //     )
    }


    render() {
        return (
            <section className="section bg-yellow-100">
                <div className="container mx-auto m-6 p-12">
                 <h1 className="streams-listing-header">Hi I'm the Stream container</h1>
                 {/* We can also do conditional outside the return, see StreamShowContainer */}
                 {this.props.loadingState !== "successful" ? 
                 "loading spinner" : <StreamsList streams={this.props.streams} /> } 
                 
                </div>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        streams: state.streams.streamsList.data,
        loadingState : state.streams.loadingState
    }
}

const mapDispatchtoProps = (dispatch) => {
    return {
        dispatchFetchStreams: () => dispatch(fetchStreams())
    }
}

//here we wrap our StreamsContainer component into Connect to make use of mapState and mapDispatch and use the store

export default connect(mapStateToProps, mapDispatchtoProps)(StreamsContainer)
