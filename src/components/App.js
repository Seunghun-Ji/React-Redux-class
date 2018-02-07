import React, { Component } from 'react';

import Display from './display'
import LoginForm from './loginForm'


class App extends Component {
    render() {
        return (
            <div className = "App">
                <Display />
                <LoginForm />
            </div>
        );
    }
}

export default App;