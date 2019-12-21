import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import Header from './components/Header/Header';

class App extends Component {
  constructor () {
    super ();
    this.state = {
      list: [] 
    }
  }

  componentDidMount() {
    axios
    .get('/api/inventory')
    .then( res => {
      this.setState({ list: res.data })
    .catch(err => console.log(err))
    });
  }

  render () {
    return (
      <div className="App">
        <Header />
        <Dashboard />
        <Form />
      </div>
    );
  }
}

export default App;
