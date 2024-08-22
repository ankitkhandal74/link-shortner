// pages/api/update-click.js

import dbConnect from '@/lib/db';
import Urls from '@/models/Url';
import Users from '@/models/User';
import User from '@/models/User';

export default async function handler(req, res) {
  const { originalUrl, api } = req.query;


  if (!originalUrl || !api) {
    return res.status(400).json({ error: 'Missing original URL or API token' });
  }

  await dbConnect();
  console.log('db connect')

  try {




    const urlDoc = await Urls.findOneAndUpdate(
      { originalUrl },
      { $inc: { clickCount: 1 } }, // Increment click count by 1
      { new: true }
    );
    
    if (!urlDoc) {
      return res.status(404).json({ error: 'URL not found' });
    }

    // Update the User's view count based on the API token
    


    return res.status(200).json({ message: 'Click count updated successfully' });
  } catch (error) {
    console.error('Error updating click count:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
