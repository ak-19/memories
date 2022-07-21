import {
  Button,
  Typography,
  Paper,
  Grid,
  Avatar,
  Container,
} from "@mui/material";

import { LockOutlined } from "@mui/icons-material";

import "./Auth.css";

const Auth = () => {
  const isSignUp = false;

  const handleSubmit = () => {};

  return (
    <Container omponent="main" maxWidth="xs">
      <Paper className="paper" elevation={3}>
        <Avatar className="avatar">
          <LockOutlined />
        </Avatar>
        <Typography variant="h5">{isSignUp ? "Signup" : "Sign in"}</Typography>
        <form className="form" onSubmit={handleSubmit}>
          <Grid container spacing={2}></Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
