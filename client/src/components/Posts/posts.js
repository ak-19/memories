import React from 'react'
import { useSelector } from 'react-redux';
import Post from './Post/post';
// import styles from './styles';

const renderPosts = (posts) => {
    if (posts.length) {
        return posts.map((post, index) => <Post key={index} post={post} />)
    }
}

export default function Posts() {
    const posts = useSelector((state) => state.posts)
    console.log(posts);
    console.log(typeof posts);
    return (
        <div>
            <h1>Posts</h1>
            {renderPosts(posts)}
        </div>
    )
}
