import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useLocation } from 'react-router-dom';
import { Container, Grow, Grid, Paper, AppBar, TextField, Button } from '@mui/material';

import ChipInput from 'material-ui-chip-input';

import Form from '../Form/form';
import Posts from '../Posts/posts';
import { getPost, getPostsSearch } from '../../actions/posts';
import Paginator from '../Paginator/paginator';
import './Home.css'

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function Home() {
    const dispatch = useDispatch();
    const [currentId, setCurrentId] = useState(null);

    const query = useQuery();
    const history = useNavigate();

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
        console.log('Tags =' + tags);
        if (search.trim() || tags.length) {
            dispatch(getPostsSearch({ tags: tags.join(','), search }))
            history(`/posts/search?searchQuery=${search.trim()}&tags=${tags.join(',')}`);
        } else {
            history('/');
        }
    }

    useEffect(() => {
        dispatch(getPost())
    }, [dispatch])

    return (
        <Grow in>
            <Container>
                <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={7}><Posts setCurrentId={setCurrentId} /></Grid>
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
                        <Paper elevation={6} className="pagination">
                            <Paginator />
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    );
}

export default Home;