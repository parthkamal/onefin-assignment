import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Movies from './components/Movies';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Login}/>
        <Route path="/movies" Component={Movies} />
      </Routes>
    </Router>
  );
}

export default App;
