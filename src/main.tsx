import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter } from 'react-router-dom';
import { ConvexProviderWithAuth0 } from 'convex/react-auth0';
import { ConvexReactClient } from 'convex/react';
import {
	QueryClient,
	QueryClientProvider,
  } from 'react-query'

export const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL as string);
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
	<Auth0Provider
		domain={import.meta.env.VITE_AUTH0_DOMAIN}
		clientId={import.meta.env.VITE_AUTH0_CLIENT}
		authorizationParams={{
			redirect_uri: window.location.origin,
		}}
		useRefreshTokens={true}
		cacheLocation='localstorage'
	>
		<ConvexProviderWithAuth0 client={convex}>
			<BrowserRouter>
				<QueryClientProvider client={queryClient}> 
					<App />
				</QueryClientProvider>
			</BrowserRouter>
		</ConvexProviderWithAuth0>
	</Auth0Provider>
);
