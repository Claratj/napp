import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from 'src/components/Layout/Layout';
import HomePage from 'src/pages/HomePage/Home.page';
import NotFoundPage from 'src/pages/NotFoundPage/NotFound.page';
import ProductDetailsPage from 'src/pages/ProductDetailsPage/ProductDetails.page';
import ProductsPage from 'src/pages/ProductsPage/Products.page';

export default function Router() {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/products" element={<ProductsPage />} />
					<Route path="/products/:id" element={<ProductDetailsPage />} />
					<Route path="*" element={<NotFoundPage />} />
				</Routes>
			</Layout>
		</BrowserRouter>
	);
}
