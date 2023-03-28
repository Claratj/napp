import { useParams } from 'react-router-dom';
import { useDetailsCardsQuery } from 'src/queries/products.queries';

export default function useProductDetails(payload) {
	const { id } = useParams();
	const detailsProductQuery = useDetailsCardsQuery(id);

	return {
		props: {
			details: detailsProductQuery.data,
			serverError: detailsProductQuery.error?.message || '',
		},
		status: detailsProductQuery.status,
	};
}
