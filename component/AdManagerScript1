import { useEffect } from 'react';

const AdManagerScript1 = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://js.wpadmngr.com/static/adManager.js";
    script.async = true;
    script.setAttribute('data-admpid', '219227');

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default AdManagerScript1;
