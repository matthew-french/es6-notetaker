import axios from 'axios';

function getRepos (username) {
  return axios.get('http://api.github.com/users/'${username} '/repos');
}

function getUserInfo (username) {
  return axios.get('http://api.github.com/users/'${username});
}

exports default getGitHubInfo (username) {
    return axios.all([getRepos(username), getUserInfo(username)])
      .then( (arr) => ({repos: arr[0].data, bio: arr[1].data}));
}
