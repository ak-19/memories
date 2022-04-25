import PostMessage from '../models/postMessage.js'

export const getPosts = async (req, res) => {
    const response = await PostMessage.find();
    console.log(response);
    res.send('This is posts controller');
};

export const createPosts = async (req, res) => {
    const response = await PostMessage.create({
            title: 'Hello',
            message: 'Hello message',
            creator: 'Ante'
    })
    console.log(response);
    res.send('Making posts');
}