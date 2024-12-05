import React from 'react'
import Opp from './App.css'
import Login from './Components/Login'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Components/Dashboard';

function App() {
  return (
<div>
<Router>
      <Routes>
        <Route path="/" element={<Login />} />
        </Routes>
</Router>
</div>
  )
}

export default App
