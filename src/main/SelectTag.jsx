import React, { Component } from 'react';

export default class SelectTag extends Component {
  constructor(props) {
    super(props);
    this.state = { flavor: 'coconut' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ flavor: event.target.value });
  }

  handleSubmit(event) {
    alert('Your favourite flavor is: ' + this.state.flavor);
    event.preventDefault();
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Pick your favorite flavor:
            <select value={this.state.flavor} onChange={this.handleChange}>
              <option value="graoefruit">Grapefruit</option>
              <option value="lime">Lime</option>
              <option value="coconut">Coconut</option>
              <option value="mango">Mango</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
