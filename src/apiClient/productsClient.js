const baseUrl = 'https://itx-frontend-test.onrender.com/api';

function productsList() {
	return fetch(`${baseUrl}/product`, { method: 'GET' }).then((response) => response.json());
}

function productDetails(id) {
	return fetch(`${baseUrl}/product/${id}`, { method: 'GET' }).then((response) => {
		return response.json();
	});
}

function addProductToCart(payload) {
	return fetch(`${baseUrl}/cart`, {
		method: 'POST',
		body: JSON.stringify(payload),
	}).then((response) => {
		return response.json();
	});
}

export default {
	productsList,
	productDetails,
	addProductToCart,
};
