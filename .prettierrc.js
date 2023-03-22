module.exports = {
	htmlWhitespaceSensitivity: 'strict',
	printWidth: 120,
	singleQuote: true,
	trailingComma: 'es5',
	extends: ['prettier', 'prettier/standard', 'prettier/property-sort-order-smacss', 'prettier/css-modules'],
	rules: {
		'colon-notation': 'double',
		'hex-length': 'long',
		'no-unknown-properties': [
			true,
			{
				ignoreProperties: ['composes', 'compose-with'],
			},
		],
		'keyword-spacing': null,
	},
};
