const { render, getByAltText, screen, fireEvent, getByTestId } = require('@testing-library/react');
const { MemoryRouter } = require('react-router-dom');
const { default: CartProvider } = require('src/providers/CartProvider');
const { default: Header } = require('./Header');

describe('<Header />', () => {
	it('should render without crashing', () => {
		render(
			<CartProvider>
				<MemoryRouter>
					<Header />
				</MemoryRouter>
			</CartProvider>
		);

		expect(screen.getByTestId('header')).toBeInTheDocument();
		expect(screen.getByTestId('logo')).toBeInTheDocument();
		expect(screen.getByText('Products')).toBeInTheDocument();
	});
});
