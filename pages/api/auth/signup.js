// pages/api/auth/signup.js
import { nanoid } from 'nanoid';
import bcrypt from 'bcryptjs';
import dbConnect from '@/lib/db';
import User from '@/models/User';

const handler = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, password } = req.body;

  await dbConnect();

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(422).json({ message: 'User already exists' });
  }

  const hashedPassword = await bcrypt.hash(password, 12);
  const apiKey = nanoid(32);

  const newUser = new User({ name, email, password: hashedPassword, apiKey });
  await newUser.save();

  res.status(201).json({ message: 'User created', user: newUser });

  
};

export default handler;
