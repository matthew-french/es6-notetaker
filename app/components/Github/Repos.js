import React from 'react';

class Repos extends React.Component {
  render() {
    return (
      <div>
        <p> REPOS </p>
        <p> {this.props.repos} </p>
      </div>
    );
  }
}

export default Repos;
