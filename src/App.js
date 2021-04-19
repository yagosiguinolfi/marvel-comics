import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AuthContext from './context/auth';

import Router from './routes';

function App() {
  return (
    <AuthContext.Provider value={{signed: true}}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
