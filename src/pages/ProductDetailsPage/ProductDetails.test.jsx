import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import ProductDetailsPage from './ProductDetails.page';

describe('<ProductDetails />', () => {
	it('should show the right product details and color/storage options', async () => {
		const mockDetails = {
			brand: 'Apple',
			model: 'iPhone 11 Pro Max',
			imgUrl: 'www.mockimage.com/iphone11.jpg',
			cpu: 'A13 Bionic',
			ram: '4 GB',
			os: 'iOS 13',
			displayResolution: '2688 x 1242',
			battery: '3190 mAh',
			primaryCamera: ['12 MP', '12 MP', '12 MP'],
			secondaryCamera: ['12 MP'],
			dimentions: '158 x 77.8 x 8.1 mm',
			weight: '226 g',
			price: 999,
			options: {
				colors: [
					{ code: 'red', name: 'Red' },
					{ code: 'black', name: 'Black' },
				],
				storages: [
					{ code: '64gb', name: '64 GB' },
					{ code: '128gb', name: '128 GB' },
				],
			},
		};

		render(ProductDetailsPage);

		waitFor(() => {
			expect(screen.getByText(mockDetails.brand)).toBeInTheDocument();
			expect(screen.getByText(mockDetails.model)).toBeInTheDocument();
			expect(screen.getByText(mockDetails.cpu)).toBeInTheDocument();
			expect(screen.getByText(mockDetails.ram)).toBeInTheDocument();
			expect(screen.getByText(mockDetails.os)).toBeInTheDocument();
			expect(screen.getByText(mockDetails.displayResolution)).toBeInTheDocument();
			expect(screen.getByText(mockDetails.battery)).toBeInTheDocument();
			expect(screen.getByText(mockDetails.primaryCamera.toString().replaceAll(',', ', '))).toBeInTheDocument();
			expect(screen.getByText(mockDetails.secondaryCamera.toString().replaceAll(',', ', '))).toBeInTheDocument();
			expect(screen.getByText(mockDetails.dimentions)).toBeInTheDocument();
			expect(screen.getByText(mockDetails.weight)).toBeInTheDocument();
			expect(screen.getByText(`${mockDetails.price} €`)).toBeInTheDocument();

			expect(screen.getByText(mockDetails.options.colors[0].name)).toBeInTheDocument();
			expect(screen.getByText(mockDetails.options.colors[1].name)).toBeInTheDocument();
			expect(screen.getByText(mockDetails.options.storages[0].name)).toBeInTheDocument();
			expect(screen.getByText(mockDetails.options.storages[1].name)).toBeInTheDocument();
		});
	});

	it('should handle select color and storage', async () => {
		const mockDetails = {
			brand: 'Apple',
			model: 'iPhone 11 Pro Max',
			imgUrl: 'www.mockimage.com/iphone11.jpg',
			cpu: 'A13 Bionic',
			ram: '4 GB',
			os: 'iOS 13',
			displayResolution: '2688 x 1242',
			battery: '3190 mAh',
			primaryCamera: ['12 MP', '12 MP', '12 MP'],
			secondaryCamera: ['12 MP'],
			dimentions: '158 x 77.8 x 8.1 mm',
			weight: '226 g',
			price: 999,
			options: {
				colors: [
					{ code: 'red', name: 'Red' },
					{ code: 'black', name: 'Black' },
				],
				storages: [
					{ code: '64gb', name: '64 GB' },
					{ code: '128gb', name: '128 GB' },
				],
			},
		};

		render(ProductDetailsPage);

		waitFor(() => {
			fireEvent.click(screen.getByLabelText(mockDetails.options.colors[0].name));
			expect(screen.getByLabelText(mockDetails.options.colors[0].name)).toBeChecked();

			fireEvent.click(screen.getByLabelText(mockDetails.options.storages[1].name));
			expect(screen.getByLabelText(mockDetails.options.storages[1].name)).toBeChecked();
		});
	});

	it('should handle add to cart action', async () => {
		const mockDetails = {
			brand: 'Apple',
			model: 'iPhone 11 Pro Max',
			imgUrl: 'www.mockimage.com/iphone11.jpg',
			cpu: 'A13 Bionic',
			ram: '4 GB',
			os: 'iOS 13',
			displayResolution: '2688 x 1242',
			battery: '3190 mAh',
			primaryCamera: ['12 MP', '12 MP', '12 MP'],
			secondaryCamera: ['12 MP'],
			dimentions: '158 x 77.8 x 8.1 mm',
			weight: '226 g',
			price: 999,
			options: {
				colors: [
					{ code: 'red', name: 'Red' },
					{ code: 'black', name: 'Black' },
				],
				storages: [
					{ code: '64gb', name: '64 GB' },
					{ code: '128gb', name: '128 GB' },
				],
			},
		};

		const mockAddToCart = jest.fn();
		render(ProductDetailsPage);

		waitFor(() => {
			fireEvent.click(screen.getByLabelText(mockDetails.options.colors[0].name));
			fireEvent.click(screen.getByLabelText(mockDetails.options.storages[1].name));
			fireEvent.click(screen.getByText('Add to cart'));

			expect(mockAddToCart).toHaveBeenCalledTimes(1);
		});
	});
});
