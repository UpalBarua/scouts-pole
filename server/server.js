import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import mongoClient from './db/mongoClient.js';
import testRoutes from './routes/test.js';
import userRoutes from './routes/userRoutes.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());

app.use('/api/test', testRoutes);
app.use('/api/users', userRoutes);

mongoClient
  .connect()
  .then(() => {
    app.listen(port, () => {
      console.log(`[⚡server] running on http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.log(`[database] failed to connect to db ${error}`);
    process.exit(0);
  });
