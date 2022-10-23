import mongoose from "mongoose";
import PostMessage from "../models/postMessage.js";

export const getPosts = async (_, res) => {
  try {
    const response = await PostMessage.find();
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getPostsSearch = async (req, res) => {
  try {
    const { searchQuery, tags } = req.query;
    const title = new RegExp(searchQuery, 'i');
    const data = await PostMessage.find({ $or: [{ title }, { tags: { $in: tags.split(',') } }] });
    res.status(200).json({ data });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

export const createPosts = async (req, res) => {
  try {
    const post = req.body;
    const response = await PostMessage.create({ ...post, creator: req.userId, createdAt: new Date().toISOString() });
    res.status(201).json(response);
  } catch (error) {
    res.status(409).json(error);
  }
};

export const updatePosts = async (req, res) => {
  try {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).send('Post with that id not found!')
    }

    const { body } = req;

    const updatePost = await PostMessage.findByIdAndUpdate(id, body, { new: true });
    res.json(updatePost)

  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const deletePosts = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).send('Post with that id not found!')
    }

    const response = await PostMessage.deleteOne({ _id: id })
    const { deletedCount } = response;
    const message = deletedCount > 0 ? 'Post deleted succesfully' : 'Post not deleted'
    res.status(200).json({ message })
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}


export const likePosts = async (req, res) => {
  try {
    const { userId } = req;

    if (!userId) return res.status(401).json({ message: 'Not authorized' })

    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).send('Post with that id not found!')
    }

    const post = await PostMessage.findById(id);

    const index = post.likes.findIndex((id) => id === String(userId));

    if (index === -1) {
      post.likes.push(userId);
    } else {
      post.likes = post.likes.filter((id) => id !== String(userId))
    }

    const updatePost = await PostMessage.findByIdAndUpdate(id, post, { new: true });

    res.json(updatePost)

  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}
