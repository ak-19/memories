import React from 'react'

import { Container, Typography, AppBar, Grow, Grid } from '@mui/material';

import memories from './images/memories.png'
import Form from './components/Form/form';
import Posts from './components/Posts/posts';

const Application = () => {
  return (
    <Container maxwidth="lg">
      <AppBar position="static" color="inherit">
        <Typography variant="h2" align="center"> Memories </Typography>
        <img src={memories} alt="memories" height="120" width="120" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}><Posts /></Grid>
            <Grid item xs={12} sm={4}><Form /></Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  )
}

export default Application;
