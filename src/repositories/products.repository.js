const { default: productsClient } = require('src/apiClient/productsClient');

function list(params) {
	return productsClient.productsList(params);
}

function details(id) {
	return productsClient.productDetails(id);
}

function add(payload) {
	return productsClient.addProductToCart(payload);
}

export default {
	list,
	details,
	add,
};
