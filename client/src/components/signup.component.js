import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SignUp from './signup.component'

const SignUpPage = () => (
    <div> 
        <h2>Sign Up</h2>
        <SignUpForm />
    </div>
);

const initial_state = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
};

class SignUpForm extends Component {
    constructor(props) {
        super(props);
    }

    onSubmit = event => {

    }

    onChange = event => {

    };

    render() {
        const {
            username, 
            email, 
            passwordOne,
            passwordTwo,
            error,
        } = this.state;

        const isInvalid = 
            passwordOne !== passwordTwo ||
            passwordOne === '' ||
            email === '' ||
            username === '';

        return (
            <form onSubmit={this.onSubmit} >
                <input 
                  name="username"
                  value={username}
                  onChange={this.onChange}
                  type="text"
                  placeholder="Full Name"  
                />
                <input 
                    name="email"
                    value={email}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Email Address"
                />
                <input 
                    name="passwordOne"
                    value={passwordOne}
                    onChange={this.onChange}
                    type="password"
                    placeholder="Password"
                />
                <input 
                    name="passwordTwo"
                    value={passwordTwo}
                    onChange={this.onChange}
                    type="password"
                    placeholder="Confirm Password"
                />
                <button disabled={isInvalid} type="submit">Sign Up</button>

                {error && <p>{error.message}</p>}
            </form>
        );
    }
}

const SignUpLink = () => (
    <p>
        Don't have an account? <Link to={SignUp}>Sign Up</Link>
    </p>
)

export default SignUpPage;

export { SignUpForm, SignUpLink };