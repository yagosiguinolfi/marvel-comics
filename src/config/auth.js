import axios from 'axios';

export function isAuthenticated() {
  const token = localStorage.getItem('token');

  const options = {
    headers: { Authorization: 'Bearer ' + token }
  };

  axios.get('http://localhost:3333/projects', {}, options)
    .then(res => {
      if (res.ok)
        return res.ok;
    })
    .catch(error => {
      console.log('Error: ', error);
      return false;
    })
};