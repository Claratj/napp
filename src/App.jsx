import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';
import { QueryClient } from '@tanstack/react-query';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import CartProvider from './providers/CartProvider';
import Router from './router/Router';
import './sass/main.scss';

export default function App() {
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				staleTime: 3600000, //one hour
			},
		},
	});

	const persister = createSyncStoragePersister({
		storage: window.localStorage,
	});

	return (
		<PersistQueryClientProvider client={queryClient} persistOptions={{ persister }}>
			<CartProvider>
				<Router />
			</CartProvider>
		</PersistQueryClientProvider>
	);
}
