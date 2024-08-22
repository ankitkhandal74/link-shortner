// models/User.js
import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  apiKey: {
    type: String,
    unique: true,
  },
  viewCount: {
    type: Number,
    default: 0, // Ensure viewCount is initialized to zero
  },
});

export default mongoose.models.User || mongoose.model('User', UserSchema);
