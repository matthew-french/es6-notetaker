import React from 'react';
import Repos from './Github/repos';
import UserProfile from './Github/user_profile';
import Notes from './Notes/notes';

class Profile extends React.Component {
  constructor () {
    super();
    this.state = {
      notes: [1, 2, 3],
      bio: {
        name: 'Matthew French'
      },
      repos: ['a', 'b', 'c']
    };
  }

  render () {
    console.log(this.props);
    return (
      <div className="row">
        <nav className="col-md-4">
          <UserProfile username={this.props.params.username} bio={this.state.bio} />
        </nav>
        <div className="col-md-4">
          <Repos repos={this.state.repos} />
        </div>
        <div className="col-md-4">
          <Notes notes={this.state.notes} />
        </div>
      </div>
    );
  }
}

export default Profile;
