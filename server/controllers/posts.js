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
    console.log(body);
    const response = await PostMessage.create(body);
    res.json(response);
  } catch (error) {
    res.json(error);
  }
};
