const { render } = require('@testing-library/react');
const { MemoryRouter } = require('react-router-dom');
const { default: CartProvider } = require('src/providers/CartProvider');
const { default: Breadcrumbs } = require('./Breadcrumbs');

describe('Breadcrumbs', () => {
	it('renders with the correct links', () => {
		const { container } = render(
			<CartProvider>
				<MemoryRouter>
					<Breadcrumbs />
				</MemoryRouter>
			</CartProvider>
		);
		const links = container.querySelectorAll('a');

		links.forEach((link) => {
			expect(link).toHaveAttribute('href', '/crumb1');
			expect(link).toHaveAttribute('href', '/crumb2');
			expect(link).toHaveAttribute('href', '/crumb3');
		});
	});

	it('replaces long strings with the word details', () => {
		const { container } = render(
			<CartProvider>
				<MemoryRouter>
					<Breadcrumbs />
				</MemoryRouter>
			</CartProvider>
		);
		const links = container.querySelectorAll('a');

		links.forEach((link) => {
			expect(links[0].textContent).not.toBe('crumb1verylongstring');
			expect(links[0].textContent).toBe('details');
		});
	});
});
