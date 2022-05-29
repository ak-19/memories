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

export const createPosts = async (req, res) => {
  try {
    const { body } = req;
    const response = await PostMessage.create(body);
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

    await PostMessage.findByIdAndRemove(id);
    res.status(200).json({ message: 'Post deleted succesfully' })
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}
