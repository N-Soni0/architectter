import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter } from 'react-router-dom';
import { ConvexProviderWithAuth0 } from 'convex/react-auth0';
import { ConvexReactClient } from 'convex/react';

export const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL as string);

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
				<App />
			</BrowserRouter>
		</ConvexProviderWithAuth0>
	</Auth0Provider>
);
