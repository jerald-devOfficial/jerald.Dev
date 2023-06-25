import mongoose, { Document, model, Model, Schema } from 'mongoose';

export interface IPost extends Document {
  title: string;
  desc: string;
  img: string;
  content: string;
  username: string;
  createdAt: Date;
  updatedAt: Date;
}

const postSchema = new Schema<IPost>(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Post = (mongoose.models.Post ||
  model('Post', postSchema)) as Model<IPost>;
