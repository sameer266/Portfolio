import { useEffect } from 'react';

function BotpressChat() {
  useEffect(() => {
    // Create the first script element
    const script1 = document.createElement('script');
    script1.src = 'https://cdn.botpress.cloud/webchat/v2.3/inject.js';
    script1.async = true;

    // Create the second script element
    const script2 = document.createElement('script');
    script2.src = 'https://files.bpcontent.cloud/2025/03/23/15/20250323150421-KVLJWS6S.js';
    script2.async = true;

    // Append scripts to the document body
    document.body.appendChild(script1);
    document.body.appendChild(script2);

    // Cleanup: Remove scripts when component unmounts
    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div>
      {/* Your other components */}
    </div>
  );
}

export default BotpressChat;