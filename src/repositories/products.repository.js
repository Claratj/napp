const { default: productsClient } = require('src/apiClient/productsClient');

function list(params) {
	return productsClient.productsList(params);
}

export default {
	list,
};
