import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useLocation } from 'react-router-dom';
import { Container, Grow, Grid, Paper, AppBar, TextField, Button } from '@mui/material';

import ChipInput from 'material-ui-chip-input';

import Form from '../Form/form';
import Posts from '../Posts/posts';
import { getPosts, getPostsSearch } from '../../actions/posts';
import Paginator from '../Paginator/paginator';
import './Home.css'

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function Home() {
    const dispatch = useDispatch();
    const [currentId, setCurrentId] = useState(0);

    const query = useQuery();
    const history = useNavigate();

    const page = query.get('page') || 1;
    const searchQuery = query.get('searchQuery')

    const [search, setSearch] = useState('');
    const [tags, setTags] = useState([]);

    const handleKeyPress = (e) => {
        if (e.charCode === 13) {
            searchPost();
        }
    }

    const handleAdd = (tag) => { setTags([...tags, tag]) }
    const handleDelete = (tag) => { setTags(tags.filter(t => t !== tag)) }

    const searchPost = () => {
        if (search.trim() || tags.length) {
            dispatch(getPostsSearch({ tags: tags.join(','), search }))
            history(`/posts/search?searchQuery=${search.trim()}&tags=${tags.join(',')}`);
        } else {
            history('/');
        }
    }

    useEffect(() => {
        dispatch(getPosts(page))
    }, [dispatch])

    return (
        <Grow in>
            <Container maxWidth="xl">
                <Grid container justify="space-between" alignItems="stretch" spacing={3} className="gridContainer">
                    <Grid item xs={12} sm={6} md={9}><Posts setCurrentId={setCurrentId} /></Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <AppBar className="appBarSearch" position="static" color="inherit">
                            <TextField
                                name="search"
                                variant="outlined"
                                label="Search stories"
                                fullWidth
                                value={search}
                                onKeyPress={handleKeyPress}
                                onChange={(e) => { setSearch(e.target.value) }}>
                            </TextField>
                            <ChipInput
                                value={tags}
                                variant="outlined"
                                label="Search tags"
                                style={{ margin: '10px 0' }}
                                onAdd={handleAdd}
                                onDelete={handleDelete}
                            />
                            <Button onClick={searchPost} className="searchButton" color="primary" varian="contained">Search</Button>
                        </AppBar>
                        <Form currentId={currentId} setCurrentId={setCurrentId} />
                        {(!searchQuery && !tags.length) && (
                            <Paper elevation={6} className="pagination">
                                <Paginator page={page} />
                            </Paper>
                        )}

                    </Grid>
                </Grid>
            </Container>
        </Grow>
    );
}

export default Home;