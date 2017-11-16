import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Test from '../components/Test';

class App extends Component {
    constructor(props){
        super(props);

        this.state = {};
    }

    componentDidMount(){
        this.props.fetchTest();
    }
  render() {
    return (
        <div>
            <BrowserRouter>
                <div className="container">
                    <Route exact path="/" component={Test} />
                </div>
            </BrowserRouter>
        </div>
    );
  }
}

export default connect(null, actions)(App);
