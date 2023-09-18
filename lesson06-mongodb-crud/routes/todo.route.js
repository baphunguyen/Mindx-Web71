import express from 'express';

import { db } from '../config/database.js';
import { ObjectId } from 'mongodb';

const router = express.Router();

router.get('/', (req, res) => {});
router.get('/:id', (req, res) => {});
router.post('/', (req, res) => {});
router.put('/:id', (req, res) => {});
router.delete('/:id', (req, res) => {});

export default router;
