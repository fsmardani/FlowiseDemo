import React, { useEffect } from 'react';

const ChatbotEmbed = () => {
  useEffect(() => {
    // Create a script element
    const script = document.createElement('script');

    // Set the type to module
    script.type = 'module';

    // Set the script content
    script.innerHTML = `
      import Chatbot from 'https://cdn.jsdelivr.net/npm/flowise-embed/dist/web.js';
      Chatbot.init({
        chatflowid: 'abc',
        apiHost: 'http://localhost:3000',
        chatflowConfig: {
          "sessionId": "123",
          "returnSourceDocuments": true
        }
      });
    `;

    // Append the script to the body
    document.body.appendChild(script);

    // Clean up by removing the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      {/* Your chatbot will be embedded here */}
      <div id="chatbot-container"></div>
    </div>
  );
};

export default ChatbotEmbed;
