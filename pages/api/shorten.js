// pages/api/shorten.js

import dbConnect from '@/lib/db';
import Url from '@/models/Url';
import { nanoid } from 'nanoid';
import User from '@/models/User';

export default async function handler(req, res) {
    await dbConnect();

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { api, link, alias ,token } = req.body;
    if (!link) {
        return res.status(400).json({ error: 'Link is required' });
    }

    // Validate API key
    // if (!api) {
    //     return res.status(400).json({ error: 'API key is required' });
    // }

    try {
        // Check if the API key is valid
        const user = await User.findOne({ apiKey: api || token });

        if (!user) {
            return res.status(401).json({ error: 'Invalid API key' });
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
            originalUrl: link,
            shortUrl: shortUrl,
            apiKey: api || token,
        });

        await newUrl.save();

        return res.status(200).json({ shortUrl });
    } catch (error) {
        console.error('Error shortening URL:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}
