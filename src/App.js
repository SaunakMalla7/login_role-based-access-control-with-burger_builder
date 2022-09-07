import React from 'react';

import Login from './Login/Login';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBulder/BurgerBuilder';

function App() {

  return (
    <main className="App">
      <Login />
      {/* <BurgerBuilder></BurgerBuilder> */}
    </main>
  );
}

export default App;
