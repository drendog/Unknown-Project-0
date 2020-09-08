module.exports = {
	root: true,
	env: {
		node: true
	},
	extends: [
		'eslint:recommended',
		'plugin:vue/essential',
		'plugin:vue/base',
		'plugin:vue/strongly-recommended',
		'@vue/standard',
		'@vue/typescript/recommended',
		'plugin:vue/recommended'
	],
	parserOptions: {
		ecmaVersion: 2020
	},
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'vue/no-v-html': 0,
		'vue/array-bracket-spacing': 2,
		'vue/html-closing-bracket-newline': ['error', {
			singleline: 'never',
			multiline: 'never'
		}],
		semi: [2, 'always'],
		'no-tabs': 0,
		'no-mixed-spaces-and-tabs': 0,
		indent: ['error', 'tab']
	}
};
