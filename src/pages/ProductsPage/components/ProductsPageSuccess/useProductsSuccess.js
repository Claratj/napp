import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function useProductsSuccess() {
	const navigate = useNavigate();
	const [querySearch, setQuerySearch] = useState('');
	const [searchParam] = useState(['brand', 'model']);

	const onProductClick = (id) => {
		navigate(`/products/${id}`);
	};

	function handleQuerySearch(e) {
		setQuerySearch(e.target.value);
	}

	function search(items) {
		return items?.filter((item) => {
			return searchParam.some((newItem) => {
				return item[newItem].toString().toLowerCase().indexOf(querySearch.toLowerCase()) > -1;
			});
		});
	}

	return { querySearch, searchParam, search, handleQuerySearch, onProductClick };
}
