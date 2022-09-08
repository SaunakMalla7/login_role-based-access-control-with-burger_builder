import React from 'react';

import Login from './Login/Login';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBulder/BurgerBuilder';
import { Route, Routes } from 'react-router-dom';
import Link from './Page/Link';
import Unathorized from './Page/Unathorized';
import Home from './Page/Home';
import Editor from './Page/Editor';
import Admin from './Page/Admin';
import Missing from './Page/Missing';
import MainLayout from './MainLayout';


function App() {

  return (
    <Routes>
      <Route path="/" element= {<MainLayout />}>
      {/* Public routes */}
      <Route path="login" element = {<login />} />
      <Route path="link" element ={<Link/>} />
      <Route path="unathorized" element={<Unathorized/>} />

      {/* we want to protect these routes */}
      <Route path="/" element={<Home />}/>
      <Route path="editor" element={<Editor/>}/>
      <Route path="admin" element={<Admin/>}/>
      

      {/* catch all */}
      <Route path="*" element={<Missing />} />


      </Route>
    </Routes>
  );
}

export default App;
