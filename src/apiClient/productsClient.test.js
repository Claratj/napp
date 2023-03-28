import { waitFor } from '@testing-library/react';
import productsClient from './productsClient.js';

describe('productsClient', () => {
	it('should make a fetch request to get a list of products', async () => {
		const products = await productsClient.productsList();
		waitFor(() => {
			expect(products).toHaveLength(3);
			expect(products[0]).toHaveProperty('id');
			expect(products[0]).toHaveProperty('name');
			expect(products[0]).toHaveProperty('price');
		});
	});

	it('fetches product details from API', async () => {
		const productId = 1;
		const productDetails = await productsClient.productDetails(productId);

		waitFor(() => {
			expect(productDetails).toHaveProperty('id', productId);
			expect(productDetails).toHaveProperty('name');
			expect(productDetails).toHaveProperty('description');
			expect(productDetails).toHaveProperty('price');
		});
	});

	test('adds product to cart via API', async () => {
		const payload = {
			productId: 1,
			quantity: 2,
		};
		const response = await productsClient.addProductToCart(payload);

		waitFor(() => {
			expect(response).toHaveProperty('status', 'success');
			expect(response).toHaveProperty('message');
		});
	});
});
