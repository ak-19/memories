import express from 'express';
import { getPosts, createPosts, deletePosts, likePosts, updatePosts } from '../controllers/posts.js';

const router = express.Router();
router.get('/', getPosts)
router.post('/', createPosts)
router.patch('/:id', updatePosts)
router.delete('/:id', deletePosts)
router.patch('/:id/likepost', likePosts)

export default router;