import mongoose from 'mongoose';

const UrlSchema = new mongoose.Schema({
    originalUrl: { type: String, required: true },
    shortUrl: { type: String},
    clickCount: { type: Number, default: 0 },
    apiKey: { type: String },
});

export default mongoose.models.Url || mongoose.model('Url', UrlSchema);
