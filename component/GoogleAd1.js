import { useEffect } from 'react';

const GoogleAd1 = () => {
  useEffect(() => {
    // Load the AdSense script
    const script = document.createElement('script');
    script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1941359181651044";
    script.async = true;
    script.crossOrigin = "anonymous";
    document.body.appendChild(script);

    // Initialize the adsbygoogle script
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("Adsense error", e);
    }

    // Clean up the script on unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      {/* Google AdSense code */}
      <ins className="adsbygoogle"
           style={{ display: 'block' }}
           data-ad-client="ca-pub-1941359181651044"
           data-ad-slot="4566403415"
           data-ad-format="auto"
           data-full-width-responsive="true"></ins>
    </div>
  );
};

export default GoogleAd1;
