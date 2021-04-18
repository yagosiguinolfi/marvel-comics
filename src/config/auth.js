import React, { useState } from 'react';
import axios from 'axios';


function Authentication() {

  const [token, setToken] = useState({ "token": '' });


  function isAuthenticated({ email, password }) {
    axios.post('http://localhost:3333/authenticate', { email, password })
      .then(res =>
        setToken({ "token": res.token }))
      .catch(error =>
        console.log('Erro:', error)
      );

    const options = {
      headers: { Authorization: 'Bearer ' + token }
    };

    axios.get('http://localhost:3333/projects', {}, options)
      .then(res => {
        if (res.ok)
          return res.ok;
      });
  }

};

export default Authentication;