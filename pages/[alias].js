import { useState, useEffect } from 'react';
import dbConnect from '@/lib/db';
import Urls from '@/models/Url';
import '@/styles/globals.css';
import { useRouter } from 'next/router';

export default function IntermediatePage({ originalUrl, apiKey }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const redirectToBlog = () => {
      try {
        if (!originalUrl || !apiKey) {
          throw new Error('Missing URL or API Key');
        }

        // Redirect to the blog page with both the original URL and API key
        router.push(
          `/blog/How-to-Get-an-Instant-Loan-from-the-Bajaj-Finserv-App?originalUrl=${encodeURIComponent(originalUrl)}&apiKey=${encodeURIComponent(apiKey)}`
        );
      } catch (err) {
        console.error('Error during redirection:', err);
        setError('Error during redirection');
      } finally {
        setLoading(false);
      }
    };

    redirectToBlog();
  }, [originalUrl, apiKey, router]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Redirecting...</h1>
    </div>
  );
}

// Fetch the original URL from the database based on the alias
export async function getServerSideProps(context) {
  const { alias } = context.query; // Get alias from URL query parameters

  await dbConnect();

  try {
    const urlDoc = await Urls.findOne({ shortUrl: alias });

    if (!urlDoc) {
      return {
        notFound: true, // Return 404 if alias is not found
      };
    }

    return {
      props: { originalUrl: urlDoc.originalUrl, apiKey: urlDoc.apiKey }, // Pass original URL and API key as props
    };
  } catch (error) {
    console.error('Error fetching original URL:', error);
    return {
      notFound: true,
    };
  }
}
