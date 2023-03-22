import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFoundPage from 'src/pages/NotFoundPage/NotFound.page';

export default function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<div>Home</div>} />
				<Route path="/products" element={<div>Products</div>} />
				<Route path="/products/:id" element={<div>Product detail</div>} />
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</BrowserRouter>
	);
}
