import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { Button, Typography, Paper, Grid, Avatar, Container } from "@mui/material";

import { LockOutlined } from "@mui/icons-material";

import { signIn, signUp } from '../../actions/auth';

import "./Auth.css";
import Input from "../Input";

const initialState = {
  firstName: '', lastName: '', email: '', password: '', confirmPassword: ''
}

const Auth = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setSignUp] = useState(false);
  const [formData, setFormData] = useState(initialState)
  const history = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignUp) {
      dispatch(signUp(formData, history))
    }
    else {
      dispatch(signIn(formData, history))
    }

  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value })
  };

  const handleShowPassword = (e) => setShowPassword((prevState) => !prevState);

  const switchMode = () => {
    setSignUp(!isSignUp);
    setShowPassword(false);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper className="paper" elevation={3}>
        <Avatar className="avatar">
          <LockOutlined />
        </Avatar>
        <Typography variant="h5">{isSignUp ? "Signup" : "Sign in"}</Typography>
        <form className="form" onSubmit={(e) => handleSubmit(e)}>
          <Grid container spacing={2}>
            {isSignUp && (
              <>
                <Input name="firstName" label="First Name" handleChange={handleChange} half />
                <Input name="lastName" label="Last Name" handleChange={handleChange} half />
              </>
            )}
            s
            <Input name="email" label="Email" type="email" handleChange={handleChange} half />
            <Input name="password" label="Password" type={showPassword ? "text" : "password"} handleChange={handleChange} handleShowPassword={handleShowPassword} half />
            {isSignUp && <Input name="confirmPassword" label="Confirm Password" type="password" handleChange={handleChange} half />}
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary" className="submit">
            {isSignUp ? "Sign up" : "Sign in"}
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Button onClick={switchMode}>{isSignUp ? "Have already account, login" : "Do not have account, sign in"}</Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
