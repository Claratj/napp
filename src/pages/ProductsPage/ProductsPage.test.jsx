import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import productsClient from 'src/apiClient/productsClient';
import ProductsPage from './Products.page';

describe('<ProductsPage />', () => {
	it('should display an error when the server return an error', async () => {
		const error = new Error('Error getting products');
		jest.spyOn(global, 'fetch').mockImplementation(() => Promise.reject(error));

		await expect(productsClient.productsList()).rejects.toThrow('Error getting products');

		expect(global.fetch).toHaveBeenCalledTimes(1);
		expect(global.fetch).toHaveBeenCalledWith('https://itx-frontend-test.onrender.com/api/product', { method: 'GET' });

		try {
			await productsClient.productsList();
		} catch (e) {
			expect(e).toEqual(error);
		}

		global.fetch.mockRestore();
	});

	it('renders search bar and items', async () => {
		render(ProductsPage);

		waitFor(() => {
			expect(screen.getByLabelText('Search')).toBeInTheDocument();
			expect(screen.getAllByTestId('item')).toHaveLength(3);
		});
	});

	it('should update the query value when a search is entered', async () => {
		render(ProductsPage);

		waitFor(() => {
			const inputSearch = screen.getByTestId('search');
			fireEvent.change(inputSearch, { target: { value: 'bag' } });
			expect(inputSearch.value).toBe('bag');
		});
	});
});
