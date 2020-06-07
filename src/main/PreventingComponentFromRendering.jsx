import React, { Component } from 'react';

class PreventingComponentFromRendering extends Component {
  constructor(props) {
    super(props);
    this.state = { showWarning: true };
  }

  handleToggleClick = () => {
    this.setState((state) => ({
      showWarning: !state.showWarning,
    }));
  };

  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Hide' : 'Show'}
        </button>
      </div>
    );
  }
}

function WarningBanner(props) {
  if (!props.warn) {
    return null;
  } else {
    return <div className="warning">Warning!</div>;
  }
}

export default PreventingComponentFromRendering;
