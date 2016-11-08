var React = require('react');

var Repos = React.createClass({
  render () {
    return (
      <div>
        <p> REPOS </p>
        <p> {this.props.repos} </p>
      </div>
    );
  }
});

module.exports = Repos;
