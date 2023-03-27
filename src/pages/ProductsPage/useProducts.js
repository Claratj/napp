import { useListProductsQuery } from 'src/queries/products.queries';

export default function useProducts() {
	const listProductsQuery = useListProductsQuery();

	return {
		props: {
			products: listProductsQuery.data,
			serverError: listProductsQuery.error?.message || '',
		},
		status: listProductsQuery.status,
	};
}
