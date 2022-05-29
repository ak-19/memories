import React from 'react';
import moment from 'moment';
import { Button, Card, CardActions, CardMedia, CardContent, Typography } from '@mui/material';
import { Delete, MoreHoriz, ThumbUpAlt } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { deletePost } from '../../../actions/posts'
import './post.css';

export default function Post({ post, setCurrentId }) {
    const dispatch = useDispatch();
    return (
        <Card className='card'>
            <CardMedia className='media' image={post.selectedFile} title={post.title} />
            <div className='overlay'>
                <Typography variant="h6">{post.creator}</Typography>
                <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div className='overlay2'>
                <Button style={{ color: 'white' }} size="small" onClick={() => { setCurrentId(post._id) }}>
                    <MoreHoriz fontSize='default' />
                </Button>
            </div>
            <div className='details'>
                <Typography varian="body2" color="textSecondary">{post.tags.map(tag => `#${tag} `)}</Typography>
            </div>
            <CardContent>
                <Typography className="title" variant="h5" gutterBottom>{post.message}</Typography>
            </CardContent>
            <CardActions className='cardActions'>
                <Button size="small" onClick={() => { }} color="primary">
                    <ThumbUpAlt fontSize='small' />
                    Like
                    {post.likeCount}
                </Button>
                <Button size="small" onClick={() => { dispatch(deletePost(post._id)) }} color="primary">
                    <Delete fontSize='small' />
                    Delete
                </Button>

            </CardActions>
        </Card>
    )
}
