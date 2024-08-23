import { useEffect } from 'react';

const GoogleAd2 = () => {
  useEffect(() => {
    // Load the AdSense script dynamically
    const script = document.createElement('script');
    script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1941359181651044";
    script.async = true;
    script.crossOrigin = "anonymous";
    document.body.appendChild(script);

    // Initialize the ad
    try {
      (adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("AdSense error:", e);
    }

    // Cleanup the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      {/* Google AdSense code */}
      <ins className="adsbygoogle"
           style={{ display: 'block' }}
           data-ad-format="fluid"
           data-ad-layout-key="-6t+ed+2i-1n-4w"
           data-ad-client="ca-pub-1941359181651044"
           data-ad-slot="7120516197"></ins>
    </div>
  );
};

export default GoogleAd2;
