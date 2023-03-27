import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import ReactDOM from 'react-dom/client';
import CartProvider from './providers/CartProvider';
import useInitialDataQueries from './queries/useInitialData.queries';
import Router from './router/Router';
import './sass/main.scss';

// eslint-disable-next-line react-hooks/rules-of-hooks
useInitialDataQueries();

const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient();

root.render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<CartProvider>
				<Router />
			</CartProvider>
		</QueryClientProvider>
	</React.StrictMode>
);
