var React = require('react');

var Repos = React.createClass({
  propTypes: {
    username: React.PropTypes.string.isRequired,
    repos: React.PropTypes.array.isRequired
  },
  render: function () {
    return (
      <div>
        <p> The Repos Array: {this.props.repos} </p>
        <p> The Repos Username: {this.props.username} </p>
      </div>
    );
  }
});

module.exports = Repos;
