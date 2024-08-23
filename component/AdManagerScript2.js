import { useEffect } from 'react';

const AdManagerScript2 = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://js.wpadmngr.com/static/adManager.js";
    script.async = true;
    script.setAttribute('data-admpid', '219229'); // Set the required attribute

    document.body.appendChild(script);

    // Cleanup when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default AdManagerScript2;
