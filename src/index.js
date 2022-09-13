import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Uclogin from './Uclogin';
import Ucreg from './Ucreg';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Regsuccess from './Regsuccess';
import Logsucs from './Logsucs';
import Ask from './Ask';
import Post from './Post';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="/login" element={<Uclogin/>}/>
      <Route path="/register" element={<Ucreg/>}/>
      <Route path="/regsuccess" element={<Regsuccess/>}/>
      <Route path="/main" element={<Logsucs/>}/>
      <Route path="/query" element={<Ask/>}/>
      <Route path="/post" element={<Post/>}/>
      </Routes>
      </BrowserRouter>
    
  </React.StrictMode>
);


