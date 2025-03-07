module.exports = {
	env: {
		es2021: true,
		node: true,
	},
	extends: ['xo', 'xo-typescript'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 12,
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint'],
	rules: {
		'@typescript-eslint/comma-dangle': 'off',
		'@typescript-eslint/indent': 'off',
		'@typescript-eslint/ban-types': 'off',
		'no-mixed-spaces-and-tabs': 'off',
	},
	ignorePatterns: ['dist'],
};
