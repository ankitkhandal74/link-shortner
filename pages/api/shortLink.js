import dbConnect from '@/lib/db';
import Url from '@/models/Url';
import User from '@/models/User';
import { nanoid } from 'nanoid';

export default async function handler(req, res) {
    await dbConnect();

    const { api, link, alias, token, url } = req.query;

    // Validate the input parameters
    if (!link && !url) {
        return res.status(400).json({ status: 'error', message: 'Link is required', shortenedUrl: '' });
    }

    try {
        // Check if the API key is valid
        const user = await User.findOne({ apiKey: api || token });

        if (!user) {
            return res.status(401).json({ status: 'error', message: 'Invalid API token', shortenedUrl: '' });
        }

        // Generate or use the provided alias
        let shortUrl = alias || nanoid(6);

        // Ensure the generated alias is unique
        let existingUrl = await Url.findOne({ shortUrl });
        while (existingUrl) {
            shortUrl = nanoid(6);
            existingUrl = await Url.findOne({ shortUrl });
        }

        // Create a new URL entry
        const newUrl = new Url({
            originalUrl: link || url,
            shortUrl: shortUrl,
            apiKey: api || token,
        });

        await newUrl.save();

        // Construct the full short URL
        const fullShortUrl = `http://${req.headers.host}/${shortUrl}`;

        return res.status(200).json({ status: 'success', message: 'Short link created', shortenedUrl: fullShortUrl });
    } catch (error) {
        console.error('Error creating short link:', error);
        return res.status(500).json({ status: 'error', message: 'Internal server error', shortenedUrl: '' });
    }
}
