import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import { db } from '../config/database.js';
import { ObjectId } from 'mongodb';

const router = express.Router();

let posts = [
  {
    id: '1',
    title: 'Master ReactJS in 4 hours',
    description: "It's free",
    author: 'Harry',
  },
  {
    id: '2',
    title: 'Rap Viet mua 3',
    description: 'Vong chung ket Rap Viet 3',
    author: 'vieon',
  },
  {
    id: '3',
    title: 'Rap Viet mua 4',
    description: 'Vong chung ket Rap Viet 4',
    author: 'VTV',
  },
  {
    id: '4',
    title: 'Master ReactJS in 4 hours',
    description: "It's free",
    author: 'Harry',
  },
  {
    id: '5',
    title: 'Rap Viet mua 3',
    description: 'Vong chung ket Rap Viet 3',
    author: 'vieon',
  },
  {
    id: '6',
    title: 'Rap Viet mua 4',
    description: 'Vong chung ket Rap Viet 4',
    author: 'VTV',
  },
];

// Get all
router.get('/', async (req, res) => {
  const posts = await db.posts.find().toArray();
  res.json(posts);
});

// Get single by id
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  const existingPost = await db.posts.findOne({ _id: new ObjectId(id) });

  if (!existingPost) {
    return res.json({
      message: 'Post not found',
    });
  }

  res.json(existingPost);
});

// Create
router.post('/', async (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    res.status(400).json({
      message: 'Missing required keys',
    });
  }

  const newPost = {
    title,
    description,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  await db.posts.insertOne(newPost);

  res.status(201).json({
    message: 'Created successfully',
  });
});

// Update
router.put('/:id', async (req, res) => {
  const { title, description } = req.body;
  const { id } = req.params;

  const existingPost = await db.posts.findOne({ _id: new ObjectId(id) });

  if (!existingPost) {
    return res.status(400).json({
      message: 'Post not found',
    });
  }

  const updatedFields = {
    ...(title && { title }),
    ...(description && { description }),
  };

  await db.posts.updateOne(
    { _id: new ObjectId(id) },
    {
      $set: updatedFields,
    }
  );

  return res.json({
    message: 'Update post successfully',
  });
});

router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  const existingPost = await db.posts.findOne({ _id: new ObjectId(id) });

  if (!existingPost) {
    return res.status(400).json({
      message: 'Post not found',
    });
  }

  await db.posts.deleteOne({ _id: new ObjectId(id) });
  return res.json({ data: 'Delete successfully' });
});

export default router;
