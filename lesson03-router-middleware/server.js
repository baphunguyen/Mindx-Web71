import express from 'express';
import appRouter from './routes/index.js';

const app = express();
const PORT = 3001;

app.use(express.json());
app.use('/api/v1', appRouter);

app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});

/*
    - Create new post       POST   /posts      (C) Crete
    - Gel all:              GET    /posts      (R) Read
    - Get by id:            GET    /posts/:id  (R) Read
    - Update a post         PUT    /posts/:id  (U) Update
    - Delete a posts        DELETE /posts/:id  (D) Delete
*/
