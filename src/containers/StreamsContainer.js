import React, { Component } from 'react';
import StreamsList from '../components/StreamsList';
import { connect } from 'react-redux';
import { fetchStreams } from '../actions/streams';
import Loader from '../components/Loader';
import '../styles/StreamContainer.css';



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

    onStreamClick = streamListItem => {
        console.log('clicking THIS stream', streamListItem)
    }


    render() {
        return (
            <section className="section stream-wrapper">
                <div className="main-container">
                 <h1 className="main-header">Stream Scheduler</h1>
                 {/* We can also do conditional outside the return, see StreamShowContainer */}
                 {this.props.loadingState !== "successful" ? 
                 <Loader /> : <StreamsList streams={this.props.streams} onStreamClick={this.onStreamClick} /> } 
                 
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
