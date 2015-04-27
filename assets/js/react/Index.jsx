// Libraries
var React = require('react');

module.exports = React.createClass({

  getInitialState: function () {

    return {
      clicks: 0
    };
  },

  handleClick: function () {

    this.setState(function (state, props) {

      return state.clicks++;
    });
  },

  render: function() {
    return (
      <div>
        <h1>Template for React</h1>
        <p>Clicks: {this.state.clicks}</p>
        <button onClick={this.handleClick}>Click!</button>
      </div>
    );
  }
});
