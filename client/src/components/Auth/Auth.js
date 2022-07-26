import React, { useState } from "react";

import { Button, Typography, Paper, Grid, Avatar, Container } from "@mui/material";

import { LockOutlined } from "@mui/icons-material";

import "./Auth.css";
import Input from "../Input";

const Auth = () => {
  const isSignUp = false;

  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {};
  const handleChange = (e) => {};
  const handleShowPassword = (e) => setShowPassword((prevState) => !prevState);

  return (
    <Container omponent="main" maxWidth="xs">
      <Paper className="paper" elevation={3}>
        <Avatar className="avatar">
          <LockOutlined />
        </Avatar>
        <Typography variant="h5">{isSignUp ? "Signup" : "Sign in"}</Typography>
        <form className="form" onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignUp && (
              <>
                <Input name="firstName" label="First Name" handleChange={handleChange} half />
                <Input name="lastName" label="Last Name" handleChange={handleChange} half />
              </>
            )}
            s
            <Input name="email" label="Email" type="email" handleChange={handleChange} half />
            <Input name="password" label="Password" type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} half />
            {isSignUp && <Input name="confirmPassword" label="Confirm Password" type="password" handleChange={handleChange} half />}
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary" className="submit">
            {isSignUp ? "Sign up" : "Sign in"}
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
