const { render, getByAltText, screen, fireEvent } = require('@testing-library/react');
const { MemoryRouter } = require('react-router-dom');
const { default: Header } = require('./Header');

describe('<Header />', () => {
	it('should render without crashing', () => {
		const { getByTestId } = render(
			<MemoryRouter>
				<Header />
			</MemoryRouter>
		);
		const logo = getByTestId('logo');

		expect(getByTestId('header')).toBeInTheDocument();
		expect(logo).toBeInTheDocument();
		expect(screen.getByText('Home')).toBeInTheDocument();
		expect(screen.getByText('Products')).toBeInTheDocument();
	});
});
