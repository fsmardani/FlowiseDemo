import React, { useEffect } from 'react';

const ChatbotEmbed = ({token}) => {
  console.log("reached here")
  useEffect(() => {
    // Create a script element
    const script = document.createElement('script');

    // Set the type to module
    script.type = 'module';

    // import Chatbot from 'https://cdn.jsdelivr.net/gh/sinarchitect/flowiseNewRepo/dist/web.js';
    // Set the script content
    script.innerHTML = `
      import Chatbot from 'http://localhost:3001/web.js';
      Chatbot.init({
        chatflowid: '41d00239-dcd0-4b61-aa84-9d477bad26ea',
        apiHost: 'https://flowise-v1py.onrender.com',
      });
    `;
    console.log(token)

    // Append the script to the body
    document.body.appendChild(script);

    // Clean up by removing the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, );

  return (
    <div>
      {/* Your chatbot will be embedded here */}
      <div id="chatbot-container"></div>
    </div>
  );
};

export default ChatbotEmbed;
