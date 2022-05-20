import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Container, Typography, AppBar, Grow, Grid } from '@mui/material';

import memories from './images/memories.png'
import Form from './components/Form/form';
import Posts from './components/Posts/posts';
import { getPost } from './actions/posts'

import './application.css';

const Application = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPost())
  }, [dispatch])

  return (
    <Container maxwidth="lg">
      <AppBar className="appBar" position="static" color="inherit">
        <Typography className="heading" variant="h2" align="center"> Memories </Typography>
        <img className="image" src={memories} alt="memories" height="120" />
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
