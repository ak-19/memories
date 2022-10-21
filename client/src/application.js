import React from "react";

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Container } from "@mui/material";

import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import PostDetails from "./components/PostDetails/PostDetails";
import Auth from "./components/Auth/Auth";

import "./application.css";

const Application = () => {
  const user = JSON.parse(localStorage.getItem('profile'))
  return (
    <Router>
      <Container maxwidth="xl">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Navigate to="/posts" />} />
          <Route exact path="/posts" element={<Home />} />
          <Route exact path="/posts/search" element={<Home />} />
          <Route exact path="/auth" element={!user ? <Auth /> : <Navigate to="/posts" />} />
          <Route path="/posts/:id" element={<PostDetails />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default Application;
