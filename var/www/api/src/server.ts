import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

const { HOST_NAME, PORT } = process.env;

const MONGO_URI: string =
  process.env.MONGO_URI || 'mongodb://localhost:27017/ecomm';

// Connect to MongoDB
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as mongoose.ConnectOptions)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err: Error) =>
    console.error(`MongoDB connection error - ${MONGO_URI}`, err),
  );

app.get('/', async (req: Request, res: Response) => {
  res.status(201).json({ status: 'NodeJs Working Fine' });
});

app.listen(Number(PORT) || 3000, () => {
  console.log(`Node App Listening At ${HOST_NAME}:${PORT}`);
});

// API to check MongoDB connection status
app.get('/health', (req: Request, res: Response) => {
  const mongoState: number = mongoose.connection.readyState;
  let status: string;

  switch (mongoState) {
    case 0:
      status = 'Disconnected';
      break;
    case 1:
      status = 'Connected';
      break;
    case 2:
      status = 'Connecting';
      break;
    case 3:
      status = 'Disconnecting';
      break;
    default:
      status = 'Unknown';
  }

  res.json({ mongoState, status });
});
