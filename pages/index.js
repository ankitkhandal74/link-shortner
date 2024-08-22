import { useState } from 'react';
import "@/styles/globals.css";
import Header from '@/component/header';

export default function Home() {
    const [link, setLink] = useState('');
    const [shortenedUrl, setShortenedUrl] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const apiToken = '8kOtg4FA0L3WNt-gXpogwg0NJrRfnB8d'; // Your API token

        try {
            const response = await fetch(`/api/shortLink?link=${encodeURIComponent(link)}&token=${apiToken}`, {
                method: 'GET',
            });

            const data = await response.json();

            if (data.status === 'success') {
                setShortenedUrl(data.shortenedUrl);
                setErrorMessage('');
            } else {
                setShortenedUrl('');
                setErrorMessage(data.message);
            }
        } catch (error) {
            setErrorMessage('An error occurred while creating the short link.');
            setShortenedUrl('');
        }
    };

    return (
        <div>
            <Header className="flex justify-between items-center pr-6 pl-4 py-8 w-full h-12 bg-[#8a1fe2] " />
        <div className='container'>
            <h1 className='heading'>URL Shortener</h1>
            <form onSubmit={handleSubmit} className='form'>
                <input
                    type="url"
                    placeholder="Enter a link to shorten"
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                    className='input'
                    required
                />
                <button type="submit" className='button'>
                    Shorten
                </button>
            </form>
            {shortenedUrl && (
                <div className='result'>
                    <h2 className='resultHeading'>Shortened URL:</h2>
                    <a href={shortenedUrl} target="_blank" rel="noopener noreferrer" className="link">
                        {shortenedUrl}
                    </a>
                </div>
            )}
            {errorMessage && <p className='error'>{errorMessage}</p>}
        </div>
        </div>
    );
}
