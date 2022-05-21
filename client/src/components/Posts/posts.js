import React from 'react'
import { useSelector } from 'react-redux';
import { Grid, CircularProgress } from '@mui/material';
import Post from './Post/post';
import './posts.css';

export default function Posts() {
    const posts = useSelector((state) => state.posts)
    return (
        !posts.length ? <CircularProgress />
            : <Grid className="mainContainer" container alignItems="stretch" spacing={3}>
                {
                    posts.map(post => <Grid item key={post._id} xs={12}><Post post={post} /></Grid>)
                }
            </Grid>
    )
}
