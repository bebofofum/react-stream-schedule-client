import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../actions/streams';


const EditStreamForm = (props) => {

    console.log('props from StreamEdit page', props)

    const [loadStream, setLoadStream] = useState({})
    // const [updateStream, setUpdateStream] = useState({
    //     name: '',
    //     description: '',
    //     schedule: ''
    // })

    const streamId = props.match.params.streamId

        useEffect(() => {
            
            console.log('testing inside useeffect', props.match.params.streamId)
            props.dispatchFetchStream(props.match.params.streamId)
            setLoadStream(props.stream)

        // const requestOptions = {
        //     method: 'get',
        //     headers: {
        //          'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     }
        // };
        // fetch(`http://localhost:3001/streams/${streamId}`, requestOptions)
        // .then(response => response.json())
        // .then(responseData => {
        //     console.log('what is this', responseData)
        //     setLoadStream(responseData.data.attributes)
        // })
        
    }, [])

    // setLoadStream(props.stream)


    let { name, description, schedule } = loadStream;

    const handleInputChange = (e) => {
        const { name, value } = e.target

        setLoadStream((preValue) => {
            return {
                ...preValue,
                [name]: value
            }
        })
    }

    console.log('this is my state now', loadStream)


const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const body = new FormData();

    body.append('stream[name]', form.name.value);
    body.append('stream[description]', form.description.value);
    body.append('stream[schedule]', form.schedule.value);

    console.log('what is in body?', body)
    console.log('what is in form?', form)

    fetch(`http://localhost:3001/streams/${streamId}`, {
        method: "PATCH", 
        body, //syntactic sugar, equivalent to doing body: body
        })
        .then(response => response.json())
        .then(streamJson => {
            console.log('just received after our Patch', streamJson)
        })
        .catch((error) => { console.error('Error:', error)})

}










    // useEffect(() => {
    //     const requestOptions = {
    //         method: 'PUt',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(streamData)
    //     };
    //     fetch(`http://localhost:3001/streams/${streamId}`, requestOptions)
    // })



    return (
        <section>
                <h1 className="max-w-6xl w-3/4 mx-auto pb-12 pt-12 font-bold text-3xl">Edit Stream</h1>
               <form onSubmit={handleSubmit} className="max-w-6xl w-3/4 mx-auto shadow-lg px-4">
                   <fieldset className="pt-12">
                       <label htmlFor="name" className="block uppercase">Name</label>
                       <input
                        onChange={handleInputChange}
                        type="text"
                        name="name"
                        value={name || ''}
                        id="name"
                        className="w-full border p-4 my-4"
                        placeholder="Name" />
                   </fieldset>
                   <fieldset className="">
                       <label htmlFor="description" className="block uppercase">Description</label>
                       <textarea
                        onChange={handleInputChange}
                        rows="4"
                        cols="20"
                        name="description"
                        value={description || ''}
                        id="description"
                        className="w-full border p-4 my-4"
                        placeholder="Stream Description"></textarea>

                   </fieldset>
                   <fieldset className="">
                       <label htmlFor="schedule" className="block uppercase">Schedule Days</label>
                       <input
                        onChange={handleInputChange}
                        type="text"
                        name="schedule"
                        value={schedule || ''}
                        id="schedule"
                        className="w-full border p-4 my-4"
                        placeholder="Schedule Days" />

                   </fieldset>
                   <button className="w-1/2 bg-blue-500 hover:bg-blue-700 text-white font-bold mt-6 mb-12 p-6">Edit Stream</button>
               </form>
            </section>
    )

}

const mapStateToProps = (state, ownProps) => {
    const filteredStream = state.streams.streamsList.find((stream) => stream.id === ownProps.match.params.streamId)
    console.log('after filteredstream', filteredStream.attributes)
    return { stream: filteredStream.attributes }
}

const mapDispatchtoProps = (dispatch) => {
    return {
        dispatchFetchStream: (id) => dispatch(fetchStream(id))
    }
}

export default connect(mapStateToProps, mapDispatchtoProps)(EditStreamForm);