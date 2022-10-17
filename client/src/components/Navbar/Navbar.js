import React, { useState, useEffect } from 'react';
import { AppBar, Typography, Toolbar, Avatar, Button } from '@mui/material';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';

import memories from '../../images/memories.png';

const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useNavigate();


  const logout = () => {
    dispatch({ type: 'LOGOUT' });

    history('/auth');

    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

  return (
    <AppBar className="appBar" position="static" color="inherit">
      <div className="brandContainer">
        <Typography component={Link} to="/" className="heading" variant="h2" align="center">Memories</Typography>
        <img className="image" src={memories} alt="icon" height="60" />
      </div>
      <Toolbar className="toolbar">
        {user?.result ? (
          <div className="profile">
            <Avatar className="purple" alt={user?.result.firstName} src={user?.result.imageUrl}>{user?.result.firstName.charAt(0)}</Avatar>
            <Typography className="userName" variant="h6">{user?.result.name}</Typography>
            <Button variant="contained" className="logout" color="secondary" onClick={logout}>Logout</Button>
          </div>
        ) : (
          <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;