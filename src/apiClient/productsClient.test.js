import productsClient from './productsClient.js';

describe('productsClient', () => {
	it('should make a fetch request to get a list of products', async () => {
		jest.spyOn(global, 'fetch').mockImplementation(() =>
			Promise.resolve({
				json: () =>
					Promise.resolve([
						{ id: 1, name: 'Product 1' },
						{ id: 2, name: 'Product 2' },
					]),
			})
		);

		const products = await productsClient.productsList();

		expect(products).toEqual([
			{ id: 1, name: 'Product 1' },
			{ id: 2, name: 'Product 2' },
		]);
		expect(global.fetch).toHaveBeenCalledTimes(1);
		expect(global.fetch).toHaveBeenCalledWith('https://itx-frontend-test.onrender.com/api/product');
		global.fetch.mockRestore();
	});

	it('should handle errors when fetching products list', async () => {
		const error = new Error('Error getting products');

		jest.spyOn(global, 'fetch').mockImplementation(() => Promise.reject(error));

		await expect(productsClient.productsList()).rejects.toThrow('Error getting products');

		expect(global.fetch).toHaveBeenCalledTimes(1);
		expect(global.fetch).toHaveBeenCalledWith('https://itx-frontend-test.onrender.com/api/product');
		global.fetch.mockRestore();
	});
});
