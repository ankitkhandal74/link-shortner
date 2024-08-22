import dbConnect from '@/lib/db';
import Url from '@/models/Url';
import User from '@/models/User';
import { nanoid } from 'nanoid';

export async function getServerSideProps({ query, res, req }) {
    await dbConnect();

    const { api, link, alias, token, url } = query;

    res.setHeader('Content-Type', 'application/json');

    // Validate the input parameters
    // if (!link && !url) {
    //     res.statusCode = 400;
    //     res.end(JSON.stringify({ status: 'error', message: 'Link is required', shortenedUrl: '' }));
    //     return { props: {} }; // Return empty props since we're sending a custom response
    // }

    try {
        // Check if the API key is valid
        const user = await User.findOne({ apiKey: api || token });

        if (!user) {
            res.statusCode = 401;
            res.end(JSON.stringify({ status: 'error', message: 'Invalid API token', shortenedUrl: '' }));
            return { props: {} };
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

        res.statusCode = 200;
        res.end(JSON.stringify({ status: 'success', message: 'Short link created', shortenedUrl: fullShortUrl }));
        return { props: {} };
    } catch (error) {
        console.error('Error creating short link:', error);
        res.statusCode = 500;
        res.end(JSON.stringify({ status: 'error', message: 'Internal server error', shortenedUrl: '' }));
        return { props: {} };
    }
}

export default function ShortLinkPage() {
    // This page does not render any content to the browser
    return null;
}
