const baseUrl = 'https://itx-frontend-test.onrender.com/api';

function productsList() {
	return fetch(`${baseUrl}/product`)
		.then((response) => response.json())
		.then((data) => data);
}

function productDetails(id) {
	return fetch(`${baseUrl}/product/${id}`)
		.then((response) => response.json())
		.then((data) => data);
}

export default {
	productsList,
	productDetails,
};
