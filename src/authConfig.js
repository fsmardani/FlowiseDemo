

import { LogLevel } from "@azure/msal-browser";



export const msalConfig = {
    auth: {
        clientId: "e81b1337-3ebc-47bf-9714-ac8dc99a40db",
        authority: "https://login.microsoftonline.com/3c65fa17-1a6c-4159-9a2d-b6eba740a8f7",
        redirectUri: "http://localhost:3000",
    },
    cache: {
        cacheLocation: "sessionStorage", // This configures where your cache will be stored
        storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    },
    system: {	
        loggerOptions: {	
            loggerCallback: (level, message, containsPii) => {	
                if (containsPii) {		
                    return;		
                }		
                switch (level) {
                    case LogLevel.Error:
                        console.error(message);
                        return;
                    case LogLevel.Info:
                        console.info(message);
                        return;
                    case LogLevel.Verbose:
                        console.debug(message);
                        return;
                    case LogLevel.Warning:
                        console.warn(message);
                        return;
                    default:
                        return;
                }	
            }	
        }	
    }
};


export const loginRequest = {
    scopes: ["User.Read"]
};


export const graphConfig = {
    graphMeEndpoint: "https://graph.microsoft.com/v1.0/me",
};

// export const chatbotConfig={
//     chatBotEndpoint:"https://13n5jik04g.execute-api.us-east-2.amazonaws.com/posts"
// }
