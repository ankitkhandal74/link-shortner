
import dbConnect from '@/lib/db';
import User from '@/models/User';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      await dbConnect();
      const user = await User.findOne({ email: req.query.email });

      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      return res.status(200).json({ apiKey: user.apiKey, viewCount: user.viewCount , name: user.name , email: user.email, password: user.password });
    } catch (error) {
      console.error('Error fetching user data:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
}