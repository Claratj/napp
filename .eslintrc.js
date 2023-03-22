module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: ['react-app', 'prettier'],
	overrides: [],
	plugins: ['react', 'prettier'],
	rules: {
		'react/react-in-jsx-scope': 'off',
		'react/prop-types': 'off',
		indent: ['off', 'never'],
		allowIdentationTabs: 'off',
		'prettier/prettier': 'error',
	},
};
