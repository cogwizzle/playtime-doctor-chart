module.exports = {
	globDirectory: 'docs/',
	globPatterns: [
		'**/*.{png,ico,html,mjs,css,json,js,scss,md}'
	],
	swDest: 'docs/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};
