import React from 'react';
import { Field, reduxForm } from 'redux-form';
import SelectInputAsync from './SelectInputAsync';
import Example from './Example';

const SignUpForm = props => {
    const { handleSubmit } = props;
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>First Name</label>
                <div>
                    <Field
                        name="firstName"
                        component="input"
                        type="text"
                        placeholder="First Name"
                    />
                    <Field name="country" component={SelectInputAsync} url='https://api.myjson.com/bins/4gzai' />
                    <br />
                    <br />
                    <Field
                        name="toto"
                        component={Example}
                        type="text"
                        placeholder="toto"
                    />
                </div>
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    );
};

export default reduxForm({
    form: 'simple', // a unique identifier for this form
})(SignUpForm);
