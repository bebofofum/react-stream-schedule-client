import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
import EditButton from '../components/EditButton';
import '../styles/StreamContainer.css';
import '../styles/StreamShowContainer.css';


class StreamShowContainer extends Component {

    state = {
        stream: {},
        loading: true
    }

    

    // handleOnClick = () => {
    //     const streamId = this.props.match.params.streamId;

    //     const requestOptions = {
    //         method: 'DELETE',
    //         headers: {
    //             "Accept": "application/json",
    //             "Content-Type": "application/json"
    //         }
    //     };



    //     fetch(`http://localhost:3001/streams/${streamId}`, requestOptions)
    //     .then(response => response.json())
    //     .then(messageJson => {
    //         this.props.history.push('/')

    //     })
    //     .catch(error => console.log(error))
        
    // }



    componentDidMount() {
        const streamId = this.props.match.params.streamId
        fetch(`http://localhost:3001/streams/${streamId}`)
        .then(response => response.json())
        .then(({ data }) => {
            console.log("Stream details", data.attributes)
            this.setState({ 
                stream: data.attributes,
                loading: false
            })
        }
            
            )

    }




    render() { 
        if (this.state.loading) { //one way to do conditional to check first for json data, see StreamContainer for another way
            return <div>Loading spinner</div>
        }
        return ( //we dont need condition logic here since we only load component data once we actually have json from api
            <section className="section stream-wrapper">
                <div className="container mx-auto">
                 <h1 className="show-main-header">Stream Details</h1>
                 <div className="flex justify-between m-6">
                     <div className="flex flex-col h-full max-w-lg mx-auto bg-white rounded-md shadow-md p-8">
                            <figure className="">
                                <img 
                                    className="w-full h-full rounded-md object-cover" 
                                    src={this.state.stream.stream_graphic_url} 
                                    alt={this.state.stream.name} /> 
                            </figure>
                            <div className="pt-8 py-2">
                                <h2 className="text-4xl pb-2 font-bold leading-6 tracking-wide text-green-700 cursor-pointer">{this.state.stream.name}</h2>
                            </div>
                            <div className="space-y-2">
                                <p className="text-lg text-gray-500">{this.state.stream.description}</p>
                            </div> 
                            <div className="flex flex-row items-end h-full w-full mt-4 ">
                                <div className="flex border-t border-gray-300 w-full py-4">
                                    <p className="text-3xl">
                                        {this.state.stream.schedule}
                                    </p>
                                </div>                            
                            </div>
                            <div className="inline-flex space-x-8">
                                <div className="">
                                    <Link
                                    to={`/streams/${this.state.stream.id}/edit`}>
                                        <EditButton buttonName="Edit" />
                                    </Link>
                                 </div>
                                <div>
                                </div> 
                            </div>
                           
 
                 </div>
                 </div> 
                 
                 


                </div>
            
            </section>
        )
    }

}

// const mapStateToProps = (state) => {
//     return {

//     }
// }

// const mapDispatchtoProps = (dispatch) => {
//     return {

//     }
// }

export default (StreamShowContainer);