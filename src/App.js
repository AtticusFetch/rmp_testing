import React, { Component } from 'react';

import SomeComp from './Component';
import { fetchSome } from './actions';

import './App.css';

class App extends Component {
  state = {
    timeoutDone: false,
    data: null,
    isFetched: false,
    error: null,
  };

  componentDidMount() {
    this._timeOutMethod();
  }

  componentWillUpdate(nextProps, nextState) {
    console.group('componentWillUpdate');
    console.log('old state', this.state);
    console.log('new state', nextState);
    console.groupEnd();
  }

  _asyncMethod = () => {
    fetchSome(this.state.data)
      .then(fetchedData => this.setState({ data: fetchedData, isFetched: true }))
      .catch(error => this.setState({ error }));
  };

  _setData = event => this.setState({ data: event.target.value });

  _timeOutMethod = () => {
    setTimeout(() => this.setState({ timeoutDone: true }), 2000);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <br />
        <button onClick={this._asyncMethod}>Fetch Data</button>
        <input onChange={this._setData} />
        <SomeComp value="somp_value" />
        <div>
          <br />
          <span id="data">Data: </span>{this.state.data && <span>{this.state.data}</span>}
        </div>
        <br />
        <div>
          <span id="isfetched">isFetched: {this.state.isFetched.toString()}</span>
        </div>
        <br />
        <div>
          <span id="timeout">timeoutDone: {this.state.timeoutDone.toString()}</span>
        </div>
      </div>
    );
  }
}

export default App;
