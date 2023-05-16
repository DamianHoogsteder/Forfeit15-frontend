import {StrictMode} from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';
import {ChakraProvider} from "@chakra-ui/react";
import {BrowserRouter} from "react-router-dom";

import { Auth0Provider} from "@auth0/auth0-react";

const domain = "dev-3qaodji0.eu.auth0.com" 
const clientid = "3ZAOEVhpuEp2VBrVlnU7OufOs3GdUsPR"

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <StrictMode>
        <BrowserRouter>
            <ChakraProvider>
                <Auth0Provider 
                    domain={domain || "dev-3qaodji0.eu.auth0.com"} 
                    clientId={clientid || "3ZAOEVhpuEp2VBrVlnU7OufOs3GdUsPR"}
                    authorizationParams={{
                        redirect_uri: window.location.origin
                    }}
                >
                    <App/>
                </Auth0Provider>
            </ChakraProvider>
        </BrowserRouter>
    </StrictMode>
);
