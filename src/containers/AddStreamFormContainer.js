import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddStreamForm extends Component {

    // const toTitleCase = () => {

    // }

    handleSubmit = (event) => {
        event.preventDefault();

       
        const form = event.target;
        const body = new FormData();


        //this makes a new formdata element to which we append data to item
        //how this submits data to rails we need to think about how the stream params 
        //look in the api and how rails is expecting to receive item
        //the required for params will be the key with the permit values as the value like so
        body.append('stream[name]', form.name.value);
        body.append('stream[description]', form.description.value);
        body.append('stream[schedule]', form.schedule.value);
        body.append('stream[stream_graphic]', form.stream_graphic.files[0], form.stream_graphic.value);

        fetch('http://localhost:3001/streams', {
            method: 'post', 
            body, //syntactic sugar, equivalent to doing body: body
            })
            .then(response => response.json())
            .then(streamJson => {
                this.props.history.push('/');
            })

    }



    render() {
        return (
            <section className="section bg-yellow-100">
                <h1 className="max-w-6xl w-3/4 mx-auto pb-12 pt-12 font-bold text-3xl">Add Stream</h1>
               <form onSubmit={this.handleSubmit} className="max-w-6xl w-3/4 bg-white mx-auto shadow-lg px-4">
                   <fieldset className="pt-12">
                       <label htmlFor="name" className="block uppercase">Name</label>
                       <input
                        type="text"
                        name="name"
                        id="name"
                        className="w-full border p-4 my-4"
                        placeholder="Name" />
                   </fieldset>
                   <fieldset className="">
                       <label htmlFor="description" className="block uppercase">Description</label>
                       <textarea
                        rows="4"
                        cols="20"
                        name="description"
                        id="description"
                        className="w-full border p-4 my-4"
                        placeholder="Stream Description"></textarea>

                   </fieldset>
                   <fieldset className="">
                       <label htmlFor="schedule" className="block uppercase">Schedule Days</label>
                       <input
                        type="text"
                        name="schedule"
                        id="schedule"
                        className="w-full border p-4 my-4"
                        placeholder="Schedule Days" />

                   </fieldset>
                   <fieldset className="">
                       <label htmlFor="stream_graphic" className="block uppercase">Stream Graphic</label>
                       <input
                        type="file"
                        name="stream_graphic"
                        id="stream_graphic"
                        className="w-full border p-4 my-4"
                        placeholder="Add Your Graphic" />

                   </fieldset>
                   <button className="w-1/2 bg-blue-500 hover:bg-blue-700 text-white font-bold mt-6 mb-12 p-6">Add Stream</button>
               </form>
            </section>
        )
    }
}

const mapDispatchtoProps = (dispatch) => {
    return {
        
    }
}

export default connect()(AddStreamForm)