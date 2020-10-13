import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { withFirebase } from './firebase'
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

class SignUpFormBase extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initial_state
        };
    }

    onSubmit = event => {
        const { username, email, passwordOne } = this.state;
        //indicate that event has started
        console.log('Submit event started...')
        this.props.firebase 
            .doCreateUserWithEmailAndPassword(email, passwordOne)
            .then(authUser => {
                this.setState({ ...initial_state });
            })
            .catch(error => {
                this.setState({ error })
            });
        event.preventDefault();
        //indicate that event has ended
        console.log('Submit event ended... ')

    }

    onChange = event => {

    };

    render() {
        
        let {
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

const SignUpForm = withRouter(withFirebase(SignUpFormBase));

export default SignUpPage;

export { SignUpForm, SignUpLink };