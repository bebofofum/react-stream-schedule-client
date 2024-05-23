import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Field } from 'react-final-form';
import "../styles/StreamForm.css";

const StreamForm = (props) => {


    const renderInput = ({ input, label }) => {
        return (
            <div className='stream-form-field'>
                <label>{label}</label>
                <input {...input} placeholder={`Enter ${label}`} />
            </div>
        )
    }

    const onSubmit = (formValues) => {
        console.log("this one",props)
        props.onSubmit(formValues);
    }

    return (
        <Form 
            initialValues={props.initialValues}
            onSubmit={onSubmit}
            render={({ handleSubmit }) => (
                <form onSubmit={handleSubmit} className="stream-form">
                    <Field 
                        name="name" 
                        component={renderInput} 
                        label="Stream Name">
                    </Field>
                    <Field 
                        name="description" 
                        component={renderInput} 
                        label="Stream Description">
                    </Field>
                    <button>Submit</button>
                </form>
            )}/>
    )

};

export default StreamForm;

// class StreamForm extends Component {

//     renderError({error, touched}){
//         if(touched && error) {
//             return (
//                 <div className='form-error-box'>
//                     <div>{error}</div>
//                 </div>
//             )
//         }
//     }

//     onSubmit(event) {
//         console.log('onsubmit', event)
//         event.preventDefault();
//     }



//     render() {
//         return (
//             <section className="section bg-yellow-100">
//                 <h1>StreamForm</h1>
//                 <Form 
//                     onSubmit={this.onSubmit}
//                 >
//                     {({handleSubmit}) => <form onSubmit={handleSubmit}>
//                             <div>
//                                 <label>Stream Name</label>
//                                 <Field 
//                                     name='name' 
//                                     component='input'
//                                     placeholder='Stream Name' />
//                                 <Field name='description' />
//                             </div>
//                         </form>}
                    
//                 </Form>
//             </section>
//         )
//     }

// }

// export default connect()(StreamForm);

