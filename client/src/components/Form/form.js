import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import FileBase from 'react-file-base64';
import { TextField, Button, Typography, Paper } from '@mui/material';
import { createPost } from '../../actions/posts'
import './form.css';

export default function Form() {
    const [postData, setPostData] = useState({
        creator: '', message: '', title: '', tags: '', selectedFile: ''
    })

    const dispatch = useDispatch();

    const clearForm = () => {
        setPostData({
            creator: '', message: '', title: '', tags: '', selectedFile: ''
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createPost(postData))
        clearForm()
    }

    return (
        <Paper className="paper">
            <form autoComplete="off" noValidate className="root form" onSubmit={handleSubmit}>
                <Typography variant='h6'> Creating a memory </Typography>
                <TextField className="input-box" name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
                <TextField className="input-box" name="message" variant="outlined" label="Message" fullWidth value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
                <TextField className="input-box" name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
                <TextField className="input-box" name="tags" variant="outlined" label="Tags" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value })} />
                <div className="fileInput"><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
                <Button className="buttonSubmit" variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" className="clearButton" color="secondary" size="small" onClick={clearForm} fullWidth>Clear</Button>
            </form>
        </Paper>
    )
}
