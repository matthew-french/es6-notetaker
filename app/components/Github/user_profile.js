import React from 'react';

class UserProfile extends React.Component {
  render () {
    return (
      <div>
        <p> Username: {this.props.username} </p>
        <p> Bio: {this.props.bio.name} </p>
      </div>
    );
  }
}

export default UserProfile;
