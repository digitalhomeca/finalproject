import React, { Component } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

class App extends Component {
    constructor() {
        super();
        this.state = {
            childLoaded: false
        }
    }
    componentWillMount() {
        this.setState.childLoaded = true;
        console.log('will mount');
    }
    componentDidMount() {
        this.setState.childLoaded = true;
        console.log('DID mount');
    }
    render() {
        let output;
        if (this.state.childLoaded === true) {
            return (
                output = <div className="App">
                    <Navigation />
                    {this.props.children}
                    <Footer />
                </div>
            );
        } else {
            output = <div className="App">
                <Navigation />
                {this.props.children}
                <Footer />
            </div>
        }
        return (
            <div className="App">
                {output}
            </div>
        );
    }
}

export default App;
