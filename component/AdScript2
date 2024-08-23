import { useEffect } from 'react';

const AdScript2 = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "//www.topcreativeformat.com/ebc963eed1dd5d3d0f8a554afc6c8b2f/invoke.js";
    script.async = true;

    const atOptions = {
      key: 'ebc963eed1dd5d3d0f8a554afc6c8b2f',
      format: 'iframe',
      height: 50,
      width: 320,
      params: {}
    };

    // Inject the atOptions variable
    const optionsScript = document.createElement('script');
    optionsScript.type = 'text/javascript';
    optionsScript.innerHTML = `atOptions = ${JSON.stringify(atOptions)};`;

    document.body.appendChild(optionsScript);
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(optionsScript);
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default AdScript2;
