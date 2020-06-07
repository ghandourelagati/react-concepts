import React, { Component } from 'react';

export default class Fetch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      comments: [],
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.json())
      .then((json) => console.log(json));
  }

  render() {
    return <div></div>;
  }
}
