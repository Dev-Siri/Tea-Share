import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import compression from 'compression';

import postRoutes from './routes/posts.js';
import userRoutes from './routes/user.js';

dotenv.config();

const app = express();

app.use(compression());
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.get('/', (req, res) => res.send('Fast response 🔥🔥🔥'));

app.use('/posts', postRoutes);
app.use('/users', userRoutes);

const CONNECTION_URL = process.env.NODE_PRIVATE_MONGO_DB_CONNECTION_URL;
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
  .catch((error) => console.error(error));
