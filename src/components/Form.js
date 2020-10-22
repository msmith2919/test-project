import React from 'react';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

export default class SimpleFormExample extends React.Component {
    state = {
        formData: {
            name: '',
            age: '',
        },
        submitted: false,
    }

    handleChange = (event) => {
        const { formData } = this.state;
        formData[event.target.name] = event.target.value;
        this.setState({ formData });
    }

    handleSubmit = () => {
        this.setState({ submitted: true }, () => {
            setTimeout(() => this.setState({ submitted: false }), 5000);
        });
    }

    render() {
        const { formData, submitted } = this.state;
        return (
            <ValidatorForm
                ref="form"
                onSubmit={this.handleSubmit}
            >
                <h2>User Information Form</h2>
                <TextValidator
                    label="Name"
                    onChange={this.handleChange}
                    name="name"
                    value={formData.name}
                    validators={['matchRegexp:^[A-Za-z]+$']}
                    errorMessages={['Enter more than one character, no numbers']}
                />
                <br />
                <TextValidator
                    label="Age"
                    onChange={this.handleChange}
                    name="age"
                    value={formData.age}
                    validators={['minNumber:10']}
                    errorMessages={['Enter a number greater than 10']}
                />
                <br />
                <Button
                    color="primary"
                    variant="contained"
                    type="submit"
                    disabled={submitted}
                >
                    {
                        (submitted && 'Your form is submitted!')
                        || (!submitted && 'Submit')
                    }
                </Button>
            </ValidatorForm>
        );
    }
}