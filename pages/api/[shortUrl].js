import dbConnect from '@/lib/db';
import Url from '@/models/Url';

export default async function handler(req, res) {
    await dbConnect();

    const { shortUrl } = req.query;
    const url = await Url.findOne({ shortUrl });

    if (url) {
        res.status(200).json({ originalUrl: url.originalUrl });
    } else {
        res.status(404).json({ message: 'URL not found' });
    }
}
