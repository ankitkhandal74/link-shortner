// models/ShortLink.js

import mongoose from 'mongoose';

const ShortLinkSchema = new mongoose.Schema({
  url: { type: String, required: true },
  alias: { type: String,  unique: true },
  apiToken: { type: String},
});

export default mongoose.models.ShortLink || mongoose.model('ShortLink', ShortLinkSchema);
