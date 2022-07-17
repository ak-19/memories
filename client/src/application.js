import React from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';

import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';

import './application.css';



const Application = () => {
  return (
    <Router>
      <Container maxwidth="lg">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Container>
    </Router>
  )
}

export default Application;
