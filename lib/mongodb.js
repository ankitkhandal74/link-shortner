import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
let client;
let clientPromise;

if (!process.env.MONGODB_URI) {
  throw new Error('Please add your Mongo URI to .env.local');
}

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 30000, // 30 seconds timeout
  connectTimeoutMS: 30000, // 30 seconds timeout
};

if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    console.log('Connecting to MongoDB...');
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect().then(() => {
      console.log('MongoDB connected successfully');
    }).catch(err => {
      console.error('MongoDB connection failed', err);
    });
  }
  clientPromise = global._mongoClientPromise;
} else {
  console.log('Connecting to MongoDB...');
  client = new MongoClient(uri, options);
  clientPromise = client.connect().then(() => {
    console.log('MongoDB connected successfully');
  }).catch(err => {
    console.error('MongoDB connection failed', err);
  });
}

export default clientPromise;
