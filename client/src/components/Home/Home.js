import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Container, Grow, Grid } from '@mui/material';
import Form from '../Form/form';
import Posts from '../Posts/posts';
import { getPost } from '../../actions/posts';

function Home() {
    const dispatch = useDispatch()
    const [currentId, setCurrentId] = useState(null);
    useEffect(() => {
        dispatch(getPost())
    }, [dispatch])

    return (
        <Grow in>
            <Container>
                <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={7}><Posts setCurrentId={setCurrentId} /></Grid>
                    <Grid item xs={12} sm={4}><Form currentId={currentId} setCurrentId={setCurrentId} /></Grid>
                </Grid>
            </Container>
        </Grow>
    );
}

export default Home;