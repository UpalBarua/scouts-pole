import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import mongoClient from './db/mongoClient.js';

// routes
import userRoutes from './routes/user.js';
import poleRoutes from './routes/poles.js';
import catchError from './middleware/errorMiddleware.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());

app.use('/api/user', userRoutes);
app.use('/api/pole', poleRoutes);
// app.use('/api/pole', poleHistoryRoutes);

app.use(catchError);

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
