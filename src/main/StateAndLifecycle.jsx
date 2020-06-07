import React, { Component } from 'react';

export default class StateAndLifecycle extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick());
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        <h1>Hello State and Lifecycle</h1>
        <h2>it is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
