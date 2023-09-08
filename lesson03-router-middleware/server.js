import express from 'express';
import appRouter from './routes/index.js';

const app = express();
const PORT = 3001;

let isAuthenticated = true;
let isAuthorized = true;

const authMiddleware = (req, res, next) => {
  console.log('1. Kiểm tra đăng nhập');
  if (!isAuthenticated) {
    return res.status(400).json({
      message: 'Need to authenticate',
    });
  }

  next();
};
const authorizationMiddleware = (req, res, next) => {
  console.log('2. Kiểm tra phân quyền');

  if (!isAuthorized) {
    return res.status(400).json({
      message: 'You dont have right to access this API',
    });
  }

  next();
};

const apiLoggerMiddleware = (req, res, next) => {
  const currentDate = new Date().toString();
  console.log(`An API is coming at ${currentDate}`);
  next();
};

app.use(express.json());

app.use('/api/v1', appRouter);
app.use(apiLoggerMiddleware);
app.get('/results', authMiddleware, authorizationMiddleware, (req, res) => {
  res.json({
    data: [1, 2, 3, 4],
  });
});

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
