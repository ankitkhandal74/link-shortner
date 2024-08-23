import { useEffect } from 'react';

const AdScript1 = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "//www.topcreativeformat.com/fc3ba9500cf22df3d1d3b735582e752e/invoke.js";
    script.async = true;

    const atOptions = {
      key: 'fc3ba9500cf22df3d1d3b735582e752e',
      format: 'iframe',
      height: 60,
      width: 468,
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

export default AdScript1;
