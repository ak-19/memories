import mongoose from 'mongoose';

export async function connectDatabase(){
    // return mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true }); 
    return true;
}