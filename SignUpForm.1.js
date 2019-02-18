import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import SelectInputAsync from './SelectInputAsync';

class SignUpForm extends Component {
    render() {
        const { handleSubmit } = this.props
        return (
            <form onSubmit={handleSubmit} >
                <button type="submit">Submit</button>
            </form>
        )
    }
}
export default reduxForm({
    form: 'signup',
})(SignUpForm)